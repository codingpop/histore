/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default function histore() {
	let get = key => history.state && history.state[key];
	let set = (key, value) => {
		let state = {};
		state[key] = value;
		history.replaceState(state);
	};
	let wrap = m => (state, title, url) => (
		m.call(history, Object.assign({}, history.state, state || {}), title, url)
	);
	history.pushState = wrap(history.pushState);
	history.replaceState = wrap(history.replaceState);
	return { set, get };
}