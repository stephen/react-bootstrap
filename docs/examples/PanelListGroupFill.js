const panelInstance = (
  <Panel>
    <Panel.Heading>
      Panel heading
    </Panel.Heading>
    <Panel.Body>
      Some default panel content here.
    </Panel.Body>
    <ListGroup bsRole="panel-body">
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>&hellip;</ListGroupItem>
    </ListGroup>
    <Panel.Body>
      Some more panel content here.
    </Panel.Body>
  </Panel>
);

ReactDOM.render(panelInstance, mountNode);
