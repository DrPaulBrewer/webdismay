/* eslint no-console:off, newline-per-chained-call:off */

import 'whatwg-fetch';
import * as W from "../src/index.js";

function con(x){ console.log(x); }

new W.Key('foo').set(42).then(con);
