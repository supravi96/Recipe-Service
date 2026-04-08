import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "hello-world" is now active!');

    let disposable = vscode.commands.registerCommand('hello-world.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World!!!******!!!');
    });

    context.subscriptions.push(disposable);
};

export function deactivate() {};