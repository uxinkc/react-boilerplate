
const Workspace = () => {

  const showWorkspace = () => {
    alert('show Workspace')
  }
  
  const TEMPLATE = (
    <button onClick={()=>showWorkspace()} className="fam-btn fam-btn--fill fam-btn--secondary" type="button">
      <svg className="fam-icon fam-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>
      <span className="fam-show@l">Workspace</span>
    </button>
  );
  return TEMPLATE;
}

export default Workspace;