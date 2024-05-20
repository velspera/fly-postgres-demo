import { Form } from '@remix-run/react';

function NewMessage() {
    return (
        <div className="bg-stone-300 p-5 shadow-md rounded-xl">
            <Form method='post' id='bday-form'>
                <h2 className="pb-3 text-xl font-semibold font-loveya">Leave a Birthday Message</h2>
                <p className="pb-3 grid grid-cols-5 gap-12">
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' className="p-2 col-span-4 bg-white/75 rounded-sm" required />
                </p>
                <p className="pb-3 grid grid-cols-5 gap-12">
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' className="p-2 col-span-4 bg-white/75 rounded-sm" required />
                </p>
                <p className="pb-3 grid grid-cols-5 gap-12">
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' name='title' className="p-2 col-span-4 bg-white/75 rounded-sm" required />
                </p>
                <p className="pb-3 grid grid-cols-5 gap-12">
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' rows={5} className="p-2 col-span-4 bg-white/75 rounded-sm" required></textarea>
                </p>
                <p className="pb-3 flex justify-center">
                    <button type='submit' className="p-2 bg-indigo-800/75 text-white rounded-lg shadow-lg">Add Message</button>
                </p>
            </Form>
        </div>
    )
}

export default NewMessage;