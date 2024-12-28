import cron from "node-cron";
import { getTransactions } from "./transaction.service";
import {
  checkTransaction,
  checkTransactionStatus,
} from "../utils/checkTransaction.utils";

cron.schedule("*/30 * * * * *", async () => {
  console.log("Running a task every 30 seconds");

  try {
    // Check if transaction failed
    const status = await checkTransactionStatus(
      "0x1319e733268497f393a22b5e8c5249ae4943a5cd5e966fb57fa7f44f8c654ac9"
    );
    if (status === "failed") {
      console.log(`Transaction failed`);
    } else {
      console.log("Transaction succeeded or pending");
    }
    // });
  } catch (error) {
    console.error("Error in cron job:", error);
  }
});
