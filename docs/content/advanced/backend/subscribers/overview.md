# Subscribers

In this document, you'll learn what Subscribers are in Medusa.

## What are Events?

In Medusa, there are events that are emitted when a certain action occurs. For example, if a customer places an order, the `order.placed` event is emitted with the order data.

The purpose of these events is to allow other parts of the platform, or third-party integrations, to listen to those events and perform a certain action. That is done by creating subscribers.

## What are Subscribers?

Subscribers register handlers for an events and allows you to perform an action when that event occurs. For example, if you want to send your customer an email when they place an order, then you can listen to the `order.placed` event and send the email when the event is emitted.

Natively in Medusa there are subscribers to handle different events. However, you can also create your own custom subscribers.

Custom subscribers reside in your project's `src/subscribers` directory. Files here should export classes, which will be treated as subscribers by Medusa. By convention, the class name should end with `Subscriber` and the file name should be the camel-case version of the class name without `Subscriber`. For example, the `WelcomeSubscriber` class is in the file `src/subscribers/welcome.js`.

Whenever an event is emitted, the subscriber’s registered handler method is executed. The handler method receives as a parameter an object that holds data related to the event. For example, if an order is placed the `order.placed` event will be emitted and all the handlers will receive the order id in the parameter object.

## What's Next :rocket:

- Learn [how to create a Subscriber](create-subscriber.md).
- [View the list of all events](events-list.md).