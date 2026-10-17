export default function HeroCircuitGraphic() {
  return (
    <svg
      className="framed-hero__circuit"
      viewBox="0 0 520 640"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMaxYMid meet"
    >
      <style>{`
        .circuit-signal {
          stroke-dasharray: 16 20;
          animation: circuit-signal-travel 9s linear infinite;
        }

        .circuit-signal--two {
          animation-duration: 12s;
          animation-delay: -4s;
        }

        .circuit-signal--three {
          animation-duration: 10.5s;
          animation-delay: -7s;
        }

        .circuit-signal--four {
          animation-duration: 14s;
          animation-delay: -2.5s;
        }

        .circuit-junction {
          transform-box: fill-box;
          transform-origin: center;
          animation: circuit-junction-pulse 6s ease-in-out infinite;
        }

        .circuit-junction--two {
          animation-duration: 7.5s;
          animation-delay: -2.5s;
        }

        .circuit-junction--three {
          animation-duration: 8.5s;
          animation-delay: -5s;
        }

        @keyframes circuit-signal-travel {
          to {
            stroke-dashoffset: -144px;
          }
        }

        @keyframes circuit-junction-pulse {
          0%,
          100% {
            opacity: 0.58;
            transform: scale(1);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.14);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .circuit-signal,
          .circuit-junction {
            animation: none;
          }
        }
      `}</style>
      <g
        stroke="#a7b8b8"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeOpacity="0.46"
        strokeWidth="2"
      >
        <path className="circuit-signal circuit-signal--one" d="M18 0V58H72V112H126V164H180V218H234V274H288V330H342V386H396V440H450V496H520" />
        <path className="circuit-signal circuit-signal--two" d="M48 0V42H96V94H150V148H204V202H258V258H312V314H366V368H420V424H474V480H520" />
        <path d="M84 0V68H132V122H186V176H240V232H294V288H348V344H402V398H456V454H520" />
        <path d="M122 0V34H174V86H228V140H282V194H336V248H390V302H444V356H496V410H520" />
        <path className="circuit-signal circuit-signal--three" d="M0 82H42V136H86V190H132V244H178V298H224V352H270V406H316V460H362V514H408V568H462V640" />
        <path d="M0 126H28V178H74V232H120V286H166V340H212V394H258V448H304V502H350V556H396V610H424V640" />
        <path d="M0 174H54V226H100V280H146V334H192V388H238V442H284V496H330V550H376V604H408V640" />
        <path d="M0 520H54V474H108V428H162V382H216V336H270V290H324V244H378V198H432V152H486V96H520" />
        <path className="circuit-signal circuit-signal--four" d="M0 570H68V522H122V476H176V430H230V384H284V338H338V292H392V246H446V200H494V146H520" />
        <path d="M0 620H44V574H98V528H152V482H206V436H260V390H314V344H368V298H422V252H476V206H520" />
        <path d="M520 54H478V104H434V158H390V212H346V266H302V320H258V374H214V428H170V482H126V536H82V590H0" />
        <path d="M520 16H494V68H450V122H406V176H362V230H318V284H274V338H230V392H186V446H142V500H98V554H54V608H0" />
      </g>

      <g
        stroke="#d1d8d5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeOpacity="0.2"
        strokeWidth="1"
      >
        <path d="M30 0V74H82V128H136V182H190V236H244V292H298V348H352V404H406V458H460V512H520" />
        <path d="M64 0V56H112V110H166V164H220V218H274V274H328V328H382V384H436V438H490V492H520" />
        <path d="M104 0V82H144V136H198V190H252V246H306V300H360V356H414V410H468V466H520" />
        <path d="M0 102H48V156H94V210H140V264H186V318H232V372H278V426H324V480H370V534H416V588H452V640" />
        <path d="M0 148H36V202H82V256H128V310H174V364H220V418H266V472H312V526H358V580H404V634" />
        <path d="M520 82H486V132H442V186H398V240H354V294H310V348H266V402H222V456H178V510H134V564H90V618H44V640" />
        <path d="M520 132H504V184H460V238H416V292H372V346H328V400H284V454H240V508H196V562H152V616H126V640" />
      </g>

      <g stroke="#7f9b9d" strokeOpacity="0.52" strokeWidth="1.5">
        <path d="M164 82H236L270 116V172H326L356 202V260" />
        <path d="M356 380V438L326 468H270V524H204L174 554" />
        <path d="M84 318H132L156 342V396H198" />
        <path d="M436 318H388L364 342V396H322" />
        <path d="M260 0V42" />
        <path d="M260 598V640" />
      </g>

      <g fill="#b9c5c1" fillOpacity="0.58">
        <circle className="circuit-junction circuit-junction--one" cx="72" cy="112" r="4" />
        <circle cx="150" cy="148" r="4" />
        <circle className="circuit-junction circuit-junction--two" cx="234" cy="274" r="4" />
        <circle cx="342" cy="386" r="4" />
        <circle className="circuit-junction circuit-junction--three" cx="450" cy="496" r="4" />
        <circle cx="126" cy="244" r="4" />
        <circle cx="212" cy="394" r="4" />
        <circle cx="350" cy="556" r="4" />
        <circle cx="432" cy="152" r="4" />
        <circle cx="324" cy="244" r="4" />
        <circle cx="216" cy="336" r="4" />
        <circle cx="108" cy="428" r="4" />
      </g>

      <g stroke="#b9c5c1" strokeOpacity="0.5" strokeWidth="1.5">
        <circle cx="132" cy="182" r="6" />
        <circle cx="294" cy="288" r="6" />
        <circle cx="390" cy="398" r="6" />
        <circle cx="176" cy="482" r="6" />
        <circle cx="406" cy="292" r="6" />
        <circle cx="230" cy="508" r="6" />
      </g>

      <g stroke="#9eb9bb" strokeOpacity="0.3" strokeWidth="1">
        <path d="M18 32H54" />
        <path d="M466 32H502" />
        <path d="M18 608H58" />
        <path d="M462 608H502" />
        <path d="M54 286H104" />
        <path d="M416 354H472" />
      </g>
    </svg>
  );
}
