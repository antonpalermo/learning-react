import React from 'react'

export default function ObjectState() {
  const [form, setForm] = React.useState({
    firstname: 'Jane',
    lastname: 'Doe',
    email: 'JaneDoe@sample.com'
  })

  return (
    <div>
      <div>
        <label htmlFor='firstname'>Fistname</label>
        <input
          type='text'
          name='firstname'
          id='firstname'
          value={form.firstname}
          onChange={e =>
            setForm(prev => ({ ...prev, firstname: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor='lastname'>Lastname</label>
        <input
          type='text'
          name='lastname'
          id='lastname'
          value={form.lastname}
          onChange={e =>
            setForm(prev => ({ ...prev, lastname: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          value={form.email}
          onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>
      Card Details: {form.firstname} {form.lastname} - {form.email}
    </div>
  )
}
