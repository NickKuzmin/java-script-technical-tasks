import { ReduceExample } from "./reduceExample";
import { ReduceSummaryExample } from "./reduceSummaryExample";
import { LodashGetExample } from "./lodashGetExample";

let reduceExample = new ReduceExample();
reduceExample.execute();

let reduceSummaryExample = new ReduceSummaryExample();
reduceSummaryExample.execute();

let lodashGetExample = new LodashGetExample();
lodashGetExample.execute();

setTimeout(x => { }, 10000);