import React, { useState } from "react";
import Container from "../../components/Container";
import lista from "../../tmp/lista";
import { Select, Button, Input } from "./styles";

function Teste() {
  let novoobj = {
    company: "",
    supO: "",
    supG: ""
  };
  const [supO, setSupO] = useState([]);
  const [supG, setSupG] = useState([]);
  const company = [...new Set(lista.map(a => a.company))];
  const [newCompany, setNewCompany] = useState([]);
  const [newSupO, setNewSupO] = useState([]);
  const [newSupG, setNewSupG] = useState([]);

  const companyChange = event => {
    const filteredCompany = { value: event.target.value };

    let filterResult = lista.filter(function(p) {
      return p.company === filteredCompany.value;
    });

    let mapped = [...new Set(filterResult.map(a => a.supO))];
    setSupO(mapped);
    setSupG([]);
  };

  const supOChange = event => {
    const filteredSupO = { value: event.target.value };

    let filterResult = lista.filter(function(p) {
      return p.supO === filteredSupO.value;
    });

    let mapped = [...new Set(filterResult.map(a => a.supG))];
    setSupG([]);
    setSupG(mapped);
  };

  function handleAdd() {
    setNewCompany([newCompany]);
    setNewSupO([newSupO]);
    setNewSupG([newSupG]);
    novoobj.company = newCompany;
    novoobj.supO = newSupO;
    novoobj.supG = newSupG;

    // function spliceFunction() {
    //   lista.splice(0, 0, novoobj);
    // }

    // spliceFunction(lista);

    lista.push(novoobj);
  }

  return (
    <Container>
      <Select onChange={companyChange} className="company">
        {company.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </Select>
      <Select onChange={supOChange}>
        {supO.map(item => (
          <option key={item}>{item}</option>
        ))}
      </Select>
      <Select>
        {supG.map(item => (
          <option key={item}>{item}</option>
        ))}
      </Select>

      <label>Arvore:</label>
      <Input
        value={newCompany}
        onChange={e => setNewCompany(e.target.value)}
      ></Input>
      <label>Filho:</label>
      <Input value={newSupO} onChange={e => setNewSupO(e.target.value)}></Input>
      <label>Neto:</label>
      <Input value={newSupG} onChange={e => setNewSupG(e.target.value)}></Input>

      <Button onClick={handleAdd}>add</Button>
    </Container>
  );
}

export default Teste;
