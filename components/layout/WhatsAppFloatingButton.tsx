import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(
        "Hola! Vi tu web y quiero saber más sobre cómo pueden ayudar a mi negocio.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12.04 2.003c-5.523 0-10 4.477-10 10 0 1.764.462 3.49 1.34 5.007L2 22l5.13-1.345a9.96 9.96 0 0 0 4.91 1.286h.004c5.522 0 9.999-4.477 9.999-10s-4.477-9.938-10.003-9.938Zm5.882 14.245c-.248.699-1.227 1.28-2.011 1.446-.535.113-1.233.203-3.583-.77-3.007-1.246-4.941-4.29-5.092-4.49-.144-.2-1.222-1.627-1.222-3.104s.767-2.198 1.04-2.5c.248-.276.598-.4.933-.4.113 0 .213.006.303.01.267.011.4.026.575.451.216.523.735 1.809.798 1.941.064.132.107.286.02.46-.08.176-.12.286-.235.44-.116.153-.245.343-.35.462-.117.132-.238.276-.102.512.135.235.6 1.006 1.29 1.634.888.808 1.616 1.062 1.862 1.174.245.113.39.096.535-.058.144-.153.615-.72.78-.966.16-.246.32-.204.535-.122.216.081 1.376.65 1.612.769.235.12.393.176.45.276.06.099.06.575-.187 1.274Z" />
      </svg>
    </a>
  );
}
