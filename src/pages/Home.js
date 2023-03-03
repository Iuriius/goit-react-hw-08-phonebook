const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'darkorchid',
    textShadow: '1px 1px 1px pink',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <i>welcome to your</i>
        <br></br>
        <b>PHONEBOOK</b> <br></br>
        <span role="img" aria-label="Greeting icon">
          🤷‍♂️
        </span>
      </h1>
    </div>
  );
}
