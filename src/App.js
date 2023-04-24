import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';

function App() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('localhost:5000/getAllads') // replace with the URL of your API endpoint
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>ADS</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>companyId</th>
              <th>PrimaryText</th>
              <th>Headline</th>
              <th>Description</th>
              <th>CTA</th>
              <td>imageUrl</td>

            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.primaryText.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.companyId}</td>
                  <td>{item.primaryText}</td>
                  <td>{item.headline}</td>
                  <td>{item.description}</td>
                  <td>{item.CTA}</td>
                  <td>{item.imageUrl}</td>

                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
