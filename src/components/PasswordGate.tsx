import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

const STORAGE_KEY = "rtpi-unlocked";

function getUnlocked(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function PasswordGate({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(getUnlocked);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  if (unlocked) return <>{children}</>;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/check-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {}
        setUnlocked(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen bg-white overflow-hidden">
      <div className="page-shell-body fixed top-[12px] bottom-[12px] sm:top-[16px] sm:bottom-[16px] left-1/2 -translate-x-1/2 w-[1440px] max-w-[calc(100vw-32px)] sm:max-w-[85vw] border border-black bg-[rgba(255,255,255,0.8)] backdrop-blur-[5px] rounded-[8px] overflow-y-auto overflow-x-hidden flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 w-full max-w-[360px] px-6"
        >
          <p className="typo-h3 font-medium text-black text-center">
            This project is password protected.
          </p>

          <div className="flex flex-col gap-2 w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Enter password"
              autoFocus
              required
              className="w-full px-4 py-3 rounded-[8px] border border-black bg-white typo-body text-black outline-none focus:ring-2 focus:ring-black/20"
            />
            {error && (
              <p className="typo-caption text-red-600">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <div className="flex gap-3 w-full">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex-1 px-4 py-3 rounded-[8px] border border-black bg-white typo-body font-medium text-black cursor-pointer hover:bg-[#f5f5f5] transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-[8px] border border-black bg-black typo-body font-medium text-white cursor-pointer hover:bg-[#333] transition-colors disabled:opacity-50"
            >
              {loading ? "Checking…" : "Enter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
