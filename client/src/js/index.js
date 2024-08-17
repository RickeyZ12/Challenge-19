import { getDb, putDb } from './database';
import { header } from './header';

const main = document.querySelector('#main');
main.innerHTML = '';

const editor = document.createElement('div');
editor.id = 'editor';
main.appendChild(editor);

const startEditor = async () => {
  // Get content from IndexedDB
  const content = await getDb();
  

  const editorInstance = new CodeMirror(editor, {
    value: content || '',
    mode: 'javascript',
    lineNumbers: true,
    theme: 'monokai',
  });


  editorInstance.on('change', () => {
    const content = editorInstance.getValue();
    putDb(content);
  });
};

startEditor();
