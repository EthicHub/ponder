import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("AstariaRouter:Liquidation", async ({ event, context }) => {
  await context.db
    .insert(schema.liquidationEvent)
    .values({ id: event.id, liquidator: event.args.liquidator });
});

ponder.on("AstariaRouter:OwnershipTransferred", async ({ event, context }) => {
  await context.db
    .insert(schema.ownershipTransferEvent)
    .values({ id: event.id, newOwner: event.args.newOwner });
});
