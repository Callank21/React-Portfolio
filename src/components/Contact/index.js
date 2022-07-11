function Contact() {
    return (
        <div className="contactShell">
            <p className="subHead">Contact</p>
            <div className="contactForm">
            <label> Name: </label><br></br>
            <input type="text" id="name"></input> <br></br>
            <label> Email: </label> <br></br>
            <input type="text" id="email"></input> <br></br>
            <label> Message: </label> <br></br>
            <textarea></textarea>
            <button>Submit</button>
            </div>
        </div>
    )
}

export default Contact;