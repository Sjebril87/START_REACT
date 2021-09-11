function Recommandation() {
  const currentlyMonth = new Date().getMonth();
  const isSpring = currentlyMonth >= 2 && currentlyMonth <= 5;

  if (!isSpring) {
    return <div>Ce n'est pas le moment de rempoter</div>;
  }
  return <div>C'est le moment de rempoter</div>;
}
export default Recommandation;
