import { Container, Row, Col, Card } from "react-bootstrap";

const InitialContent = () => {
  return (
    <Container className="py-5 h-100">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col md={12} lg={12} xl={10}>
          <Card>
            <Card.Body>
              <blockquote className="blockquote bg-white px-3 pt-4">
                <Card.Text className="mb-0 mt-2 font-italic h1">
                  "If chess has any relationship to film-making, it would be in the way it helps you
                  develop patience and discipline in choosing between alternatives at a time when an
                  impulsive decision seems very attractive"
                </Card.Text>
                <footer className="blockquote-footer pt-4 mt-4 border-top">Stanley Kubrick</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InitialContent;
