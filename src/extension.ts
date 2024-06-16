// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


	const newcommand = vscode.commands.registerCommand('simple-c-runner.compileandrun', (uri:vscode.Uri) => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const childProcess = require('child_process');
			childProcess.exec(`start cmd.exe /k "gcc ${editor.document.fileName} -Wall && a.exe && echo. & echo Press any key to close && pause>nul && exit"`, (error: any, stdout: any, stderr: any) => {});
		}
	});

	context.subscriptions.push(newcommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
