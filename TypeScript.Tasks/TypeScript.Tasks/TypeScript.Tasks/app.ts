import { ReduceExample } from "./reduceExample";
import { ReduceSummaryExample } from "./reduceSummaryExample";
import { LodashGetExample } from "./lodashGetExample";
import { ClosureAddFunctionExample } from "./closureAddFunctionExample";
import { SetTimeoutLoopExample } from "./setTimeoutLoop";

const reduceExample = new ReduceExample();
reduceExample.execute();

const reduceSummaryExample = new ReduceSummaryExample();
reduceSummaryExample.execute();

const lodashGetExample = new LodashGetExample();
lodashGetExample.execute();

const closureAddFunctionExample = new ClosureAddFunctionExample();
closureAddFunctionExample.execute();

const setTimeoutLoopExample = new SetTimeoutLoopExample();
setTimeoutLoopExample.execute();

setTimeout(x => { }, 10000);