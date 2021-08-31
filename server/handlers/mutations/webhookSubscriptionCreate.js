import "isomorphic-fetch";
import { gql } from "apollo-boost";

export function WEBHOOK_SUBSCRIPTION_CREATE(url) {
  return gql`
  mutation {
    webhookSubscriptionCreate(
      topic: ORDERS_CREATE
      webhookSubscription: {
        format: JSON,
        callbackUrl: "https://12345.ngrok.io/"}
    ) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
      }
    }
  }
  `;
}

export const getOneTimeUrl = async (ctx) => {
  const { client } = ctx;
  const confirmationUrl = await client
    .mutate({
      mutation: WEBHOOK_SUBSCRIPTION_CREATE(process.env.HOST),
    })
    .then((response) => response.data.webhookSubscriptionCreate.confirmationUrl);
  return ctx.redirect(confirmationUrl);
};
