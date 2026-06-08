const Contact = () => {

    const handleFormSubmit = (formData) => {
        // Handle form submission logic here
        console.log(formData.entries());
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
    };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
    
    <div className="contact-wrapper container">
      <form action={handleFormSubmit}>
        <input type="text" placeholder="Enter your name" required autoComplete="off" name="username" className="form-control"/>
        <input type="email" placeholder="Enter your email" required autoComplete="off" name="email" className="form-control"/>
        <textarea name="message" placeholder="Enter your message" required autoComplete="off" rows="10" className="form-control"></textarea>
        <button style={{width: '88px', margin: 'auto'}} type="submit" value="Send">Send</button>
      </form>
    </div>
    </section>

  )
}

export default Contact