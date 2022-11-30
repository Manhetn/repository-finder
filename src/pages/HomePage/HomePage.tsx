import Container from '../../components/common/Container/Container';

const HomePage = () => {
  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    margin: '0'
  };

  const descriptionStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '32px',
    margin: '0'
  };

  const listItemStyle: React.CSSProperties = {
    margin: '12px 16px',
    fontSize: '20px'
  };

  const subTitleStyle: React.CSSProperties = {
    textAlign: 'center'
  };

  const listStyle: React.CSSProperties = {
    width: '600px',
    margin: '0 auto'
  };

  return (
    <Container>
      <h1 style={titleStyle}>Repository finder</h1>
      <p style={descriptionStyle}>
        This project implements interaction with the open github API, user
        search, getting a list of user repositories.
      </p>
      <h2 style={subTitleStyle}>Technologies used:</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>React, react-router </li>
        <li style={listItemStyle}>Redux/toolkit </li>
        <li style={listItemStyle}>JavaScript, Type Script</li>
      </ul>
    </Container>
  );
};

export default HomePage;
