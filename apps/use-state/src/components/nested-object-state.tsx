import React from 'react'

export default function NestedObjectState() {
  const [metadata, setMetadata] = React.useState({
    name: 'Jane Doe',
    gender: 'Female',
    address: {
      street: '5 Park Drive',
      barangay: 'Molino',
      municipality: 'Talon 2',
      province: 'Cavite'
    }
  })

  function setAddress(value: {
    street?: string
    barangay?: string
    municipality?: string
    province?: string
  }) {
    setMetadata(prev => ({ ...prev, address: { ...prev.address, ...value } }))
  }

  return (
    <div>
      <h1>Metadata</h1>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={metadata.name}
          onChange={e => setMetadata({ ...metadata, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='gender'>Gender</label>
        <input
          type='text'
          name='gender'
          id='gender'
          value={metadata.gender}
          onChange={e => setMetadata({ ...metadata, gender: e.target.value })}
        />
      </div>
      <div>
        <h2>Address</h2>
        <div>
          <label htmlFor='street'>Street</label>
          <input
            type='text'
            name='street'
            id='street'
            value={metadata.address.street}
            onChange={e => setAddress({ street: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor='barangay'>Barangay</label>
          <input
            type='text'
            name='Barangay'
            id='barangay'
            value={metadata.address.barangay}
            onChange={e => setAddress({ barangay: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor='municipality'>Municipality</label>
          <input
            type='text'
            name='municipality'
            id='municipality'
            value={metadata.address.municipality}
            onChange={e => setAddress({ municipality: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor='province'>Province</label>
          <input
            type='text'
            name='province'
            id='province'
            value={metadata.address.province}
            onChange={e => setAddress({ province: e.target.value })}
          />
        </div>
        {JSON.stringify(metadata)}
      </div>
    </div>
  )
}
