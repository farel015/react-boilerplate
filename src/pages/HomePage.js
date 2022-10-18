import React from "react";
import { Container, Table } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container>
        <div className="mt-5">
          <h5 className="text-success mb-3">Stack Tech</h5>
          <hr />
          <Table bordered className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>React js</td>
                <td>
                  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    Klik Disini
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>React-bootstrap</td>
                <td>
                  <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
                    Klik Disini
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>React-router-dom</td>
                <td>
                  <a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer">
                    Klik Disini
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
          <h5 className="text-success mt-5">Repository</h5>
          <hr />
          <p>https://github.com/farel015/react-boilerplate</p>
          <p>git clone --single-branch -b "nama branch" https://github.com/farel015/react-boilerplate.git .</p>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
