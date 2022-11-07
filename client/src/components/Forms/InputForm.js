import Card from "../UI/Card/Card";

const InputForm = (props) => {

  return (
    <main className="bg-gradient-to-r from-backgroundGradient1 to-backgroundGradient2 w-screen h-screen relative flex justify-center items-center">
      <Card className="lg:h-3/4 md:h-3/4 xsm:w-full xsm:h-screen md:w-4/5 align-center lg:w-2/6 bg-gradient-to-br from-formBackgroundGradient1 to-formBackgroundGradient2 flex flex-col items-center justify-center">
        <form className="w-4/5" onSubmit={props.onSubmit}>
          {props.children}
            <button
              className="w-full mt-20 h-20 text-3xl rounded-lg bg-btncolor hover:bg-btncolorHover shadow-md"
              type="submit"
            >
              {props.btnText}
            </button>
        </form>
      </Card>
    </main>
  );
};
export default InputForm;
