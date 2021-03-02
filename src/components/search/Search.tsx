import React, { useState } from 'react';
import './Search.scss';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Search() {
  const [url, setUrl] = useState('');

  const pasteAdd = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      // tslint:disable-next-line: no-console
      console.error('Failed to copy!', err);
    }
  };

  const onTodoChange = (value) => {
    setUrl(value);
  };

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        placeholder="Add YouTube video"
        type="input"
        value={url}
        onChange={(e) => onTodoChange(e.target.value)}
      />
      <button className="search-btn" title="Add to Queue">
        <AddIcon />
      </button>
      <button
        className="paste-btn"
        title="Paste from Clipboard"
        onClick={pasteAdd}
        onChange={(e) => onTodoChange(e)}
      >
        <AssignmentIcon />
      </button>
    </div>
  );
}

export default Search;
