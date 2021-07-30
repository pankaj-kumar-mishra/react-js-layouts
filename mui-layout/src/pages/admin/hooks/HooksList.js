import UseStateHook from "./UseStateHook";
import UseEffectHook from "./UseEffectHook";
import UseContextHook from "./UseContextHook";
import UseReducerHook from "./UseReducerHook";
import CombineStateContext from "./CombineStateContext";
import CombineReducerContext from "./CombineReducerContext";
import UseCallbackHook from "./UseCallbackHook";
import UseMemoHook from "./UseMemoHook";
import UseRefHook from "./UseRefHook";
import UseLayoutEffectHook from "./UseLayoutEffectHook";
import CustomHook from "./CustomHook";

const HooksList = () => {
  const Section = ({ topic, children }) => (
    <div className="m-3 p-2 border border-2 border-primary rounded-2">
      <h4 className="fw-bold text-primary mb-2">{topic}</h4>
      {children}
    </div>
  );

  return (
    <div className="d-flex flex-column">
      <Section topic="useState">
        <UseStateHook />
      </Section>
      <Section topic="useEffect">
        <UseEffectHook />
      </Section>
      <Section topic="useContext">
        <UseContextHook />
      </Section>
      <Section topic="useReducer">
        <UseReducerHook />
      </Section>
      <Section topic="Combine use of (useState and useContext)">
        <CombineStateContext />
      </Section>
      <Section topic="Combine use of (useReducer and useContext)">
        <CombineReducerContext />
      </Section>
      <Section topic="useCallback/memo">
        <UseCallbackHook />
      </Section>
      <Section topic="useMemo">
        <UseMemoHook />
      </Section>
      <Section topic="useRef">
        <UseRefHook />
      </Section>
      <Section topic="useLayoutEffect">
        <UseLayoutEffectHook />
      </Section>
      <Section topic="Custom Hooks">
        <CustomHook />
      </Section>
    </div>
  );
};

export default HooksList;
