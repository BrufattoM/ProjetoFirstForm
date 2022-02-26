async function load() {
    const res = await fetch("http://localhost:3000/").then((data) => data.json())
    res.Funcionario.map(({name,email,data_nasc,salario,cargo}) => addElement({name,email,data_nasc,salario,cargo}))
}

load()

function addElement({name,email,data_nasc,salario,cargo}){
    
}