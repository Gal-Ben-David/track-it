import { app, BrowserWindow } from 'electron'
import path from 'path'

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    // During development
    win.loadURL('http://localhost:5173')

    // In production:
    // win.loadFile(path.join(__dirname, '../dist/index.html'))
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})