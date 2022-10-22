import User from "./User";

export default function Header() {
  return (
    <header className="flex justify-between text-sm text-gray-700 p-5">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">images</p>
        <User/>
      </div>
    </header>
  );
}
