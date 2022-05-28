function Input() {
  return (
    <form>
      <label for="chat-line">
        Enter chat
        <input type="text" name="chat-input" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Input;