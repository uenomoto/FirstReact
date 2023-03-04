const ColorfulMessage = ({ color, children }) => {
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
