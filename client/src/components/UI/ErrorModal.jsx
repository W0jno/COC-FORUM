import ButtonNavbar from "../Header/ButtonNavbar";
import Card from "./Card";



const ErrorModal = (props) => {
  return (
    <>
      <div
        onClick={props.onOkay}
        className="fixed top-0 left-0 w-full h-full z-2 bg-slate-900 opacity-75"
      />
      <Card className="p-0 absolute  z-3 overflow-hidden w-2/5 bg-slate-50">
        <header className="bg-backgroundGradient1 p-4 w-full h-full">
          <h2 className="text-xl">{props.title}</h2>
        </header>
        <div className="p-4">
          <p>{props.message}</p>
        </div>
        <footer className="p-4 flex justify-end">
          <ButtonNavbar
            className="text-xl bg-formBackgroundGradient2 hover:bg-backgroundGradient2"
            onClick={props.onOkay}
          >
            Okay
          </ButtonNavbar>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
