import React , {useState} from 'react'



export default function TextForm(props) {

  const upclick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const lowclick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase","success");
  }
  const onchange = (event)=> {
      setText(event.target.value);
  }
  const clearclick = ()=> {
      let newText = '';
    setText(newText);
    props.showAlert("Text Cleared ","success");
  }
  const revclick = ()=> {
      let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reversed ","success");
  }
  const copyClick = ()=> {
      let txt = document.getElementById('txtBox');
      txt.select();
      navigator.clipboard.writeText(txt.value);
      props.showAlert("Copied To Clipboard","success");
  }
  const rmvExtraSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed","success");
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className = "container" style={{color : props.mode==='dark'?'white':'black' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onchange} style={{backgroundColor : props.mode==='light'?'white':'black',color : props.mode==='dark'?'white':'black' }} id="txtBox" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1 " onClick={upclick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={lowclick} >Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1 " onClick={clearclick} >Clear Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={revclick} >Reverse Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={copyClick} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={rmvExtraSpace} >Remove Extra Space</button>
        
  </div>
  <div className="container my-3 " style={{color : props.mode==='dark'?'white':'black' }} >
    <h1>Your Summery</h1>
    <p> {text.split(/\s+/).filter((ele)=>{return ele.length !==0 }).length} Words and {text.length} characters. </p>
    <p> takes {0.010*text.split(" ").filter((ele)=>{return ele.length !==0 }).length } Minutes to Read.</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview!"}</p>
  </div>
  </>
  )
}
