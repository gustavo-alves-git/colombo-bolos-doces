import React, { useState, useEffect } from 'react';

const ColomboLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const config = {
    whatsapp: "5541987189803",
    regiao: "Curitiba e Região Metropolitana",
    instagram: "bolos_colombo",
    mensagemWhatsapp: "Olá! Vi o site da Colombo Bolos & Doces e gostaria de fazer uma encomenda! 🍰"
  };

  const whatsappLink = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`;
  const instagramLink = `https://instagram.com/${config.instagram}`;

  const produtos = [
    { nome: "Bolos Decorados", descricao: "Bolos artesanais para ocasiões especiais", emoji: "🎂" },
    { nome: "Bolos Caseiros", descricao: "Receitas tradicionais feitas com carinho", emoji: "🍰" },
    { nome: "Doces Finos", descricao: "Brigadeiros, beijinhos e muito mais", emoji: "🍫" },
    { nome: "Tortas", descricao: "Tortas doces e salgadas sob encomenda", emoji: "🥧" },
  ];

  return (
    <div style={styles.container}>
      {/* Background decorativo */}
      <div style={styles.bgPattern}></div>
      
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={styles.navLink}>
            @{config.instagram}
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        ...styles.hero,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s ease-out'
      }}>
        <div style={styles.logoContainer}>
          <div style={styles.logoCircle}>
            <div style={styles.whiskIcon}>🥄</div>
            <h1 style={styles.logoText}>Colombo</h1>
            <p style={styles.logoSubtext}>BOLOS & DOCES</p>
            <div style={styles.hearts}>
              <span style={styles.heart}>💜</span>
              <span style={styles.heart}>💜</span>
            </div>
            <p style={styles.slogan}>Feito com amor</p>
          </div>
        </div>
        
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Os melhores doces são aqueles feitos com amor</h2>
          <p style={styles.heroDescription}>
            Bolos e doces sob encomenda para tornar seus momentos ainda mais especiais.
            Cada receita é preparada com ingredientes selecionados e muito carinho.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.ctaButton}>
            <span style={styles.whatsappIcon}>📱</span>
            Fazer Encomenda
          </a>
        </div>
      </section>

      {/* Sobre Section */}
      <section style={styles.sobreSection}>
        <div style={styles.flowerDecorLeft}>✿</div>
        <div style={styles.flowerDecorRight}>✿</div>
        
        <h2 style={styles.sectionTitle}>Nossa História</h2>
        <div style={styles.divider}></div>
        <p style={styles.sobreText}>
          A <strong>Colombo Bolos & Doces</strong> nasceu do amor por adoçar momentos e 
          transformar sentimentos em sabores. Cada bolo e cada doce é preparado com cuidado, 
          ingredientes selecionados e, acima de tudo, muito amor.
        </p>
        <p style={styles.sobreText}>
          Aqui, acreditamos que os melhores doces são aqueles que aquecem o coração, 
          despertam memórias e tornam qualquer ocasião ainda mais especial.
        </p>
        <p style={styles.sobreHighlight}>
          Seja bem-vindo(a) e sinta o carinho em cada detalhe. 💙✨
        </p>
      </section>

      {/* Produtos Section */}
      <section style={styles.produtosSection}>
        <h2 style={styles.sectionTitle}>Nossos Produtos</h2>
        <div style={styles.divider}></div>
        
        <div style={styles.produtosGrid}>
          {produtos.map((produto, index) => (
            <div 
              key={index} 
              style={{
                ...styles.produtoCard,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span style={styles.produtoEmoji}>{produto.emoji}</span>
              <h3 style={styles.produtoNome}>{produto.nome}</h3>
              <p style={styles.produtoDescricao}>{produto.descricao}</p>
            </div>
          ))}
        </div>
        
        <p style={styles.produtosNota}>
          * Todos os produtos são feitos sob encomenda. Entre em contato para consultar 
          disponibilidade, sabores e valores.
        </p>
      </section>

      {/* Galeria */}
      <section style={styles.galeriaSection}>
        <h2 style={styles.sectionTitle}>Nossas Delícias</h2>
        <div style={styles.divider}></div>

        <div style={styles.galeriaGrid}>
          <div style={styles.galeriaItem}>
            <img src="./gallery/foto1.jpeg" alt="Delícia Colombo 1" style={styles.galeriaImg} />
          </div>
          <div style={styles.galeriaItem}>
            <img src="./gallery/foto2.jpeg" alt="Delícia Colombo 2" style={styles.galeriaImg} />
          </div>
          <div style={styles.galeriaItem}>
            <img src="./gallery/foto3.jpeg" alt="Delícia Colombo 3" style={styles.galeriaImg} />
          </div>
          <div style={styles.galeriaItem}>
            <video style={styles.galeriaVideo} autoPlay loop muted playsInline>
              <source src="./gallery/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={styles.instagramButton}>
          Ver mais no Instagram →
        </a>
      </section>

      {/* Contato Section */}
      <section style={styles.contatoSection}>
        <h2 style={styles.sectionTitleLight}>Faça sua Encomenda</h2>
        <div style={styles.dividerLight}></div>
        
        <p style={styles.contatoText}>
          Entre em contato pelo WhatsApp e solicite seu orçamento personalizado.
          Atendemos em <strong>{config.regiao}</strong>.
        </p>
        
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.whatsappButton}>
          <span style={styles.whatsappButtonIcon}>💬</span>
          Chamar no WhatsApp
        </a>
        
        <div style={styles.socialLinks}>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            Instagram: @{config.instagram}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLogo}>
          <span style={styles.footerLogoText}>Colombo</span>
          <span style={styles.footerLogoSub}>Bolos & Doces</span>
        </div>
        <p style={styles.footerSlogan}>Feito com amor 💙</p>
        <p style={styles.footerCopy}>© 2026 Colombo Bolos & Doces. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: '#3a4565',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #f5f7fc 0%, #e8edf8 50%, #dfe6f5 100%)',
  },
  
  bgPattern: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(106, 127, 187, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(130, 145, 200, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(150, 165, 210, 0.05) 0%, transparent 30%)
    `,
    pointerEvents: 'none',
    zIndex: 0,
  },

  header: {
    position: 'relative',
    zIndex: 10,
    padding: '20px 40px',
  },
  
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  
  navLink: {
    color: '#5b6a8a',
    textDecoration: 'none',
    fontSize: '14px',
    letterSpacing: '0.5px',
    transition: 'color 0.3s ease',
  },

  hero: {
    position: 'relative',
    zIndex: 1,
    padding: '40px 20px 80px',
    textAlign: 'center',
  },
  
  logoContainer: {
    marginBottom: '40px',
  },
  
  logoCircle: {
    width: '200px',
    height: '200px',
    margin: '0 auto',
    background: 'linear-gradient(145deg, #e0e6f5 0%, #c4cfe8 100%)',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 40px rgba(91, 106, 138, 0.15), inset 0 -2px 10px rgba(255,255,255,0.5)',
    border: '3px solid rgba(255,255,255,0.6)',
    position: 'relative',
  },
  
  whiskIcon: {
    fontSize: '24px',
    marginBottom: '5px',
  },
  
  logoText: {
    fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
    fontSize: '36px',
    color: '#3a4a6c',
    margin: 0,
    fontWeight: 'normal',
    lineHeight: 1,
  },
  
  logoSubtext: {
    fontSize: '11px',
    letterSpacing: '3px',
    color: '#5b6a8a',
    margin: '5px 0',
    fontWeight: '600',
  },
  
  hearts: {
    display: 'flex',
    gap: '5px',
    marginTop: '2px',
  },
  
  heart: {
    fontSize: '10px',
  },
  
  slogan: {
    fontSize: '10px',
    color: '#7a8aae',
    margin: '5px 0 0',
    fontStyle: 'italic',
  },

  heroContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  
  heroTitle: {
    fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
    fontSize: 'clamp(28px, 5vw, 42px)',
    color: '#3a4a6c',
    marginBottom: '20px',
    fontWeight: 'normal',
    lineHeight: 1.3,
  },
  
  heroDescription: {
    fontSize: '16px',
    lineHeight: 1.8,
    color: '#5b6a8a',
    marginBottom: '30px',
  },
  
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'linear-gradient(135deg, #6a7fa0 0%, #4e5d7d 100%)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    boxShadow: '0 8px 25px rgba(78, 93, 125, 0.3)',
    transition: 'all 0.3s ease',
  },
  
  whatsappIcon: {
    fontSize: '20px',
  },

  sobreSection: {
    position: 'relative',
    zIndex: 1,
    padding: '80px 20px',
    background: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
  
  flowerDecorLeft: {
    position: 'absolute',
    left: '10%',
    top: '20px',
    fontSize: '40px',
    color: '#c4cfe8',
    opacity: 0.5,
  },
  
  flowerDecorRight: {
    position: 'absolute',
    right: '10%',
    bottom: '20px',
    fontSize: '40px',
    color: '#c4cfe8',
    opacity: 0.5,
  },
  
  sectionTitle: {
    fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
    fontSize: '36px',
    color: '#3a4a6c',
    marginBottom: '10px',
    fontWeight: 'normal',
  },
  
  divider: {
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #7088bb, transparent)',
    margin: '0 auto 30px',
  },
  
  sobreText: {
    maxWidth: '700px',
    margin: '0 auto 20px',
    fontSize: '16px',
    lineHeight: 1.9,
    color: '#4e5d7d',
  },
  
  sobreHighlight: {
    fontSize: '18px',
    color: '#6a7fa0',
    fontStyle: 'italic',
    marginTop: '30px',
  },

  produtosSection: {
    position: 'relative',
    zIndex: 1,
    padding: '80px 20px',
    textAlign: 'center',
  },
  
  produtosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
    maxWidth: '900px',
    margin: '40px auto',
    padding: '0 20px',
  },
  
  produtoCard: {
    background: 'rgba(255,255,255,0.85)',
    borderRadius: '20px',
    padding: '30px 20px',
    boxShadow: '0 5px 20px rgba(106, 127, 187, 0.1)',
    border: '1px solid rgba(196, 207, 232, 0.5)',
    transition: 'all 0.3s ease',
  },
  
  produtoEmoji: {
    fontSize: '40px',
    display: 'block',
    marginBottom: '15px',
  },
  
  produtoNome: {
    fontSize: '18px',
    color: '#3a4a6c',
    marginBottom: '10px',
    fontWeight: '600',
  },
  
  produtoDescricao: {
    fontSize: '14px',
    color: '#7a8aae',
    lineHeight: 1.6,
  },
  
  produtosNota: {
    fontSize: '13px',
    color: '#94a0bd',
    fontStyle: 'italic',
    maxWidth: '500px',
    margin: '0 auto',
  },

  galeriaSection: {
    position: 'relative',
    zIndex: 1,
    padding: '80px 20px',
    background: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
  
  galeriaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    maxWidth: '700px',
    margin: '40px auto',
  },
  
  galeriaItem: {
    aspectRatio: '1',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 20px rgba(106, 127, 187, 0.15)',
  },

  galeriaImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },

  galeriaVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  
  instagramButton: {
    display: 'inline-block',
    color: '#6a7fa0',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    marginTop: '20px',
    transition: 'color 0.3s ease',
  },

  contatoSection: {
    position: 'relative',
    zIndex: 1,
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #4e5d7d 0%, #3a4a6c 100%)',
    textAlign: 'center',
  },
  
  sectionTitleLight: {
    fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
    fontSize: '36px',
    color: '#f5f7fc',
    marginBottom: '10px',
    fontWeight: 'normal',
  },
  
  dividerLight: {
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
    margin: '0 auto 30px',
  },
  
  contatoText: {
    fontSize: '16px',
    color: '#dfe6f5',
    maxWidth: '500px',
    margin: '0 auto 30px',
    lineHeight: 1.8,
  },
  
  whatsappButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    background: '#25D366',
    color: 'white',
    padding: '18px 36px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '17px',
    fontWeight: '600',
    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
    transition: 'all 0.3s ease',
  },
  
  whatsappButtonIcon: {
    fontSize: '22px',
  },
  
  socialLinks: {
    marginTop: '40px',
  },
  
  socialLink: {
    color: '#c4cfe8',
    textDecoration: 'none',
    fontSize: '14px',
  },

  footer: {
    position: 'relative',
    zIndex: 1,
    padding: '40px 20px',
    background: '#313d55',
    textAlign: 'center',
  },
  
  footerLogo: {
    marginBottom: '10px',
  },
  
  footerLogoText: {
    fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
    fontSize: '28px',
    color: '#c4cfe8',
    display: 'block',
  },
  
  footerLogoSub: {
    fontSize: '11px',
    letterSpacing: '2px',
    color: '#94a0bd',
  },
  
  footerSlogan: {
    fontSize: '14px',
    color: '#7a8aae',
    marginBottom: '20px',
  },
  
  footerCopy: {
    fontSize: '12px',
    color: '#5b6a8a',
  },
};

export default ColomboLandingPage;
