let ask = (question, yes, no) =>{
    confirm(question)? yes(): no();
}

ask("Do you agree?", 
()=> console.log("you are agree"),
()=> "you intrupt the execution");


hgfh