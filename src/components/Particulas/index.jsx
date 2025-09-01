import { useEffect, useMemo, useCallback, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import padrao from './padrao.json';
import styles from './Particulas.module.scss';
import { memo } from "react";

// Componente interno apenas para o Particles, nunca recebe props que mudam
const ParticlesFixed = memo(() => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(() => {}, []);
  const options = useMemo(() => padrao, []);

  return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
});

// Componente principal que recebe children dinâmico
function Particulas({ children, className }) {
  return (
    <div className={styles.Particulas + ' container ' + className}>
      {/* Partículas fixas no fundo */}
      <ParticlesFixed />
      
      {/* Conteúdo sobreposto, que pode mudar */}
      <div className={styles.children + ' container'}>
        {children}
      </div>
    </div>
  );
}

export default memo(Particulas);
