function ModalError({ isOpen, closeModal }) {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "390px",
          height: "670px",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          width: 300,
          height: 100,
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "#f6f2dd",
          borderRadius: "5px",
        }}
      >
        <button
          onClick={closeModal}
          style={{ backgroundColor: "#f6f2dd", border: "none" }}
        >
          X
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            paddingTop: "20px",
          }}
        >
          로그인 후 이용해주세요
        </div>
      </div>
    </div>
  );
}

export default ModalError;
