import { ReduceExample } from "./reduceExample";
import { ReduceSummaryExample } from "./reduceSummaryExample";

let reduceExample = new ReduceExample();
reduceExample.execute();

let reduceSummaryExample = new ReduceSummaryExample();
reduceSummaryExample.execute();

setTimeout(x => { }, 10000);