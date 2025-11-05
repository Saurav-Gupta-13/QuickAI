// Free Access Middleware (no premium or Clerk checks)
export const auth = async (req, res, next) => {
  try {
    // Simulate a userId (optional — if your DB expects one)
    req.auth = () => ({ userId: "free-user" });

    // Everyone is treated as free user
    req.plan = "free";
    req.free_usage = 0;

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
