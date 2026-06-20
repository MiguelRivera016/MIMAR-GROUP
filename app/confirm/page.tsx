"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function ConfirmContent() {
  const params = useSearchParams();
  const token = params.get("token");
  const platform = params.get("platform"); // "movera" | "mimar"

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("No se encontró un token de confirmación válido.");
      return;
    }

    // TODO: Conectar con tu API backend para verificar el token
    // Ejemplo:
    // fetch(`/api/confirm?token=${token}&platform=${platform}`)
    //   .then(res => res.json())
    //   .then(data => { ... })

    // Por ahora simulamos un estado de éxito
    const timer = setTimeout(() => {
      setStatus("success");
      setMessage("Tu cuenta ha sido confirmada exitosamente.");
    }, 1500);

    return () => clearTimeout(timer);
  }, [token, platform]);

  const platformName =
    platform === "mimar" ? "Mimar" : platform === "movera" ? "Movera" : "";

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-50">
      <div className="max-w-md mx-auto px-6">
        <div className="bg-white rounded-xl shadow-card border border-gray-100 p-8 text-center">
          {/* Logo */}
          <h2 className="text-xl font-bold mb-1">
            <span className="text-brand-600">Avera</span>Technologies
          </h2>
          {platformName && (
            <p className="text-sm text-ink-500 mb-8">
              Confirmación de cuenta — {platformName}
            </p>
          )}

          {status === "loading" && (
            <div className="py-8">
              <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
              <p className="mt-4 text-ink-600">Verificando tu cuenta...</p>
            </div>
          )}

          {status === "success" && (
            <div className="py-8">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-2">
                ¡Cuenta confirmada!
              </h3>
              <p className="text-ink-600 text-sm">{message}</p>
              {platformName && (
                <p className="mt-4 text-sm text-ink-500">
                  Ya puedes regresar a {platformName} e iniciar sesión.
                </p>
              )}
            </div>
          )}

          {status === "error" && (
            <div className="py-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-2">
                Error de confirmación
              </h3>
              <p className="text-ink-600 text-sm">{message}</p>
              <a
                href="mailto:info@averatechnologies.com"
                className="mt-4 inline-block text-brand-600 text-sm font-semibold hover:underline"
              >
                Contactar soporte
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        </div>
      }
    >
      <ConfirmContent />
    </Suspense>
  );
}
