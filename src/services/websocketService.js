import { Client } from "@stomp/stompjs";

let stompClient = null;

export const connectWebSocket = (onMessageReceived) => {

    stompClient = new Client({
        brokerURL: "ws://localhost:8080/ws/websocket",

        reconnectDelay: 5000,

        onConnect: () => {

            console.log("WebSocket Connected");

            stompClient.subscribe(
                "/topic/alerts",
                (message) => {

                    const alert = JSON.parse(
                        message.body
                    );

                    onMessageReceived(alert);
                }
            );
        },

        onStompError: (frame) => {
            console.error(frame);
        }
    });

    stompClient.activate();
};