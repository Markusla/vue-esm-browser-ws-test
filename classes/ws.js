export default class WS {
	wsMessage = "test";
	socket = null;

	connectws() {
		this.socket = new WebSocket(
			"wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
		);

		this.socket.onopen = (e) => {
			this.wsMessage = "[open] Connection established";
			this.wsMessage = "Sending to server";
			this.socket.send("My name is John");
		};

		this.socket.onmessage = (event) => {
			console.log(event.data);
			this.wsMessage = event.data;
		};

		this.socket.onclose = (event) => {
			if (event.wasClean) {
				this.wsMessage = `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`;
			} else {
				// e.g. server process killed or network down
				// event.code is usually 1006 in this case
				this.wsMessage = "[close] Connection died";
			}
		};

		this.socket.onerror = (error) => {
			this.wsMessage = `[error]`;
		};
	}
}
