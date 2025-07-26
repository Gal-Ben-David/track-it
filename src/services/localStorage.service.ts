
const query = async <T>(entityType: string): Promise<T[]> => {
    try {
        const data = localStorage.getItem(entityType)
        const entities = data ? JSON.parse(data) as T[] : []
        return Promise.resolve(entities)
    } catch (err) {
        console.error(`Failed to parse localStorage data for ${entityType}:`, err)
        return Promise.resolve([])
    }
}

const post = async <T>(entityType: string, newEntity: T): Promise<T> => {
    try {
        newEntity = JSON.parse(JSON.stringify(newEntity))
        const entities = await query<T>(entityType)
        entities.unshift(newEntity)
        _save(entityType, entities)
        return newEntity
    } catch (err) {
        console.error(`Failed to add data for ${entityType}:`, err)
        throw new Error('Failed to add data')
    }
}

const put = async <T extends { id: string }>(entityType: string, updatedEntity: T): Promise<T> => {
    try {
        updatedEntity = JSON.parse(JSON.stringify(updatedEntity))
        const entities = await query<T>(entityType)
        const idx = entities.findIndex(entity => entity.id === updatedEntity.id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity.id} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    } catch (err) {
        console.error(`Failed to put data for ${entityType}:`, err)
        throw new Error('Failed to put data')
    }
}

const remove = async <T extends { id: string }>(entityType: string, entityId: string): Promise<void> => {
    try {
        const entities = await query<T>(entityType)
        const idx = entities.findIndex(entity => entity.id === entityId)
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
    } catch (err) {
        console.error(`Failed to remove data for ${entityType}:`, err)
        throw new Error('Failed to remove data')
    }
}

function _save<T>(entityType: string, entities: T[]): void {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

const saveMany = <T>(entityType: string, entities: T[]): void => {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

export const storageService = {
    query,
    post,
    put,
    remove,
    saveMany
}