import * as vscode from 'vscode';
import VariableResolver from './VariableResolver';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('imnater.read-file.read', async (args) => {
		if (args?.filePath === undefined) {
			throw new Error('No file specified. Currently only usable in inputs sections of task.json and launch.json files');
		}
		const resolver = new VariableResolver();
		const fileUri: any = resolver.resolve(args.filePath);
		const fileDocument = await vscode.workspace.openTextDocument(fileUri);
		const fileContents = await fileDocument.getText();
		return fileContents;
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
