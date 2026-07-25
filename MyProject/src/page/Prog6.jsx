function Program6(){
    const person = {
        name: "Gregorio Y. Zala",
        avtar: "https://react.dev/images/docs/scientists/7vQD0fPs.jpg",
        theme: {
            backgroundColor:"black",
            color:"Pink",
            padding:"20px",
            borderRedius:"10px",
            textAlign:"center"
        }
    };
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img className="avtar" src={person.avtar} alt={person.name} />
            <div>
                <ul>
                    <li>List1</li>
                    <li>List2</li>
                    <li>List3</li>
                </ul>
            </div>
        </div>
    );
}
export default Program6;