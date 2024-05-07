import { Form } from '@remix-run/react';

function NewMessage() {
    return (
        <Form method='post' id='bday-form'>
            <p>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' required />
            </p>
            <p>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' required />
            </p>
            <p>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' name='title' required />
            </p>
            <p>
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' rows='8' required></textarea>
            </p>
            <p>
                <button type='submit'>Add Message</button>
            </p>
        </Form>
    )
}

export default NewMessage;