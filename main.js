const courseData = {
    welcome: {
        title: 'Bienvenido al Curso de Electrónica',
        content: `
            <div class="hero">
                <h1>Bienvenido al Curso de Electrónica</h1>
                <p class="hero-subtitle">Aprende desde los fundamentos hasta la práctica con simulación 3D</p>
                <button class="btn-primary" onclick="navigateToSection('tema1')">Comenzar Curso</button>
            </div>
            <div class="features">
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h3>15 Temas Completos</h3>
                    <p>Desde los orígenes hasta simulación práctica</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🧮</div>
                    <h3>Herramientas Interactivas</h3>
                    <p>Calculadoras y quizzes en cada tema</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔬</div>
                    <h3>Simulador 3D</h3>
                    <p>Protoboard virtual con componentes reales</p>
                </div>
            </div>
        `
    },
    tema1: {
        title: 'Conceptos básicos de electrónica',
        content: `
            <h2 class="section-title">Conceptos básicos de electrónica</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>¿Qué es la Electrónica?</h3>
                    <p>La electrónica es la rama de la física y la ingeniería que estudia el control del flujo de electrones (corriente eléctrica) para procesar información, transmitir señales y alimentar dispositivos. Se basa en principios del electromagnetismo y la mecánica cuántica para diseñar circuitos con componentes como resistencias, transistores y circuitos integrados.</p>
                </div>

                <div class="key-points">
                    <h3>Usos de la Electrónica</h3>
                    <ul>
                        <li><strong>Comunicaciones:</strong> Teléfonos, radios, redes inalámbricas, internet</li>
                        <li><strong>Control industrial:</strong> Robótica, automatización, sistemas embebidos</li>
                        <li><strong>Medicina:</strong> Equipos de diagnóstico, marcapasos, imagenología</li>
                        <li><strong>Entretenimiento:</strong> Consolas, audio, video, realidad virtual</li>
                        <li><strong>Transporte:</strong> Sistemas de navegación, control de motores, vehículos eléctricos</li>
                        <li><strong>Hogar:</strong> Electrodomésticos inteligentes, iluminación, climatización</li>
                    </ul>
                </div>

                <div class="warning-box">
                    <h3>Origen de la Electrónica</h3>
                    <p>La electrónica nace a finales del siglo XIX con el descubrimiento del electrón (J.J. Thomson, 1897) y la invención de la válvula de vacío (Fleming, 1904). Sin embargo, sus fundamentos se apoyan en descubrimientos anteriores como la pila voltaica (Volta, 1800), el electromagnetismo (Ampère, 1820) y la Ley de Ohm (Ohm, 1827). La evolución clave fue el transistor en 1947, que permitió la miniaturización y dio paso a la electrónica moderna.</p>
                </div>

                <div class="key-points">
                    <h3>Puntos Clave</h3>
                    <ul>
                        <li>La electrónica nace del estudio de la electricidad y el magnetismo</li>
                        <li>Los descubrimientos del siglo XIX sentaron las bases teóricas</li>
                        <li>El electrón es la partícula fundamental de la electrónica</li>
                    </ul>
                </div>
            </div>
        `
    },
    tema2: {
        title: '2. Evolución de la Electrónica',
        content: `
            <h2 class="section-title">2. Evolución de la Electrónica</h2>
            <div class="content-card">
                <div class="section-image">
                    <img src="images/EvolucionElectronica.png" alt="Evolución de la Electrónica" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:1.5rem 0">
                </div>
                <div class="key-points">
                    <h3>Puntos Clave</h3>
                    <ul>
                        <li>De válvulas de vacío a transistores: reducción de tamaño y consumo</li>
                        <li>Los circuitos integrados permitieron la revolución digital</li>
                        <li>La miniaturización continúa: más potencia en menos espacio</li>
                        <li>Hoy la electrónica está presente en todos los aspectos de la vida</li>
                    </ul>
                </div>
            </div>
        `
    },
    tema3: {
        title: '3. Electrónica Análoga',
        content: `
            <h2 class="section-title">3. Electrónica Análoga</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>Definición</h3>
                    <p>La electrónica análoga trabaja con señales continuas que pueden tomar cualquier valor dentro de un rango. Representa información mediante variaciones continuas de voltaje o corriente.</p>
                </div>
                <div class="section-image">
                    <img src="images/ElectronicaAnaloga.png" alt="Electrónica Análoga" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:1.5rem 0">
                </div>
                <div class="key-points">
                    <h3>Puntos Clave</h3>
                    <ul>
                        <li>Trabaja con valores continuos, no discretos</li>
                        <li>Más susceptible al ruido que la electrónica digital</li>
                        <li>Esencial para interfaz con el mundo físico</li>
                        <li>Componentes típicos: resistencias, capacitores, transistores, amplificadores operacionales</li>
                    </ul>
                </div>
            </div>
        `
    },
    tema4: {
        title: '4. Electrónica Digital',
        content: `
            <h2 class="section-title">4. Electrónica Digital</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>Definición</h3>
                    <p>La electrónica digital trabaja con señales discretas que solo pueden tomar valores específicos, típicamente dos: alto (1) y bajo (0). Utiliza lógica binaria para procesar información.</p>
                </div>
                <div class="section-image">
                    <img src="images/ElectronicaDigital.png" alt="Electrónica Digital" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:1.5rem 0">
                </div>
                <div class="key-points">
                    <h3>Puntos Clave</h3>
                    <ul>
                        <li>Base de la computación moderna</li>
                        <li>Mayor inmunidad al ruido que la electrónica análoga</li>
                        <li>Permite operaciones complejas mediante lógica combinacional y secuencial</li>
                        <li>Se complementa con la electrónica análoga (conversores ADC/DAC)</li>
                    </ul>
                </div>
            </div>
        `
    },
    tema5: {
        title: '5. Electrónica Programable',
        content: `
            <h2 class="section-title">5. Electrónica Programable</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>Definición</h3>
                    <p>La electrónica programable permite modificar el comportamiento de un circuito mediante software, sin cambiar el hardware. Combina circuitos digitales con capacidad de almacenar y ejecutar instrucciones.</p>
                </div>
                <div class="section-image">
                    <img src="images/ElectronicaProgramable.png" alt="Electrónica Programable" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:1.5rem 0">
                </div>
                <div class="key-points">
                    <h3>Puntos Clave</h3>
                    <ul>
                        <li>Revoluciona el diseño electrónico: hardware + software</li>
                        <li>Permite crear sistemas complejos con menos componentes</li>
                        <li>Facilita la personalización y actualización de productos</li>
                        <li>Base de IoT, robótica y sistemas embebidos modernos</li>
                    </ul>
                </div>
            </div>
        `
    },
    tema6: {
        title: '6. Microcontroladores',
        content: `
            <h2 class="section-title">6. Microcontroladores</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>Definición</h3>
                    <p>Un microcontrolador (MCU) es un circuito integrado programable que contiene un procesador, memoria y periféricos de entrada/salida en un solo chip. Diseñado para controlar dispositivos electrónicos específicos.</p>
                </div>
                <div class="section-image">
                    <img src="images/microcontroladores.png" alt="Microcontroladores" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:1.5rem 0">
                </div>
                <div class="key-points">
                    <h3>Puntos Clave</h3>
                    <ul>
                        <li>Todo en uno: CPU + memoria + periféricos en un chip</li>
                        <li>Bajo consumo y costo, ideal para sistemas embebidos</li>
                        <li>Programables en C, C++, Python (MicroPython), Arduino IDE</li>
                        <li>Permiten crear productos inteligentes con mínimo hardware externo</li>
                    </ul>
                </div>
            </div>
        `
    },
    tema7: {
        title: '7. Magnitudes Eléctricas',
        content: `
            <h2 class="section-title">7. Magnitudes Eléctricas</h2>
            <div class="content-card">
                <p style="margin-bottom: 2rem;">Las magnitudes eléctricas son las propiedades medibles de un circuito eléctrico. Comprender estas magnitudes es fundamental para el análisis y diseño de circuitos.</p>
                
                <div class="definition-box">
                    <h3>7.1 Voltaje (V)</h3>
                    <p><strong>Definición:</strong> El voltaje o tensión eléctrica es la diferencia de potencial eléctrico entre dos puntos. Representa la "presión" que impulsa a los electrones a moverse.</p>
                    <p><strong>Unidad:</strong> Voltio (V) | <strong>Símbolo:</strong> V o U</p>
                    <p><strong>Analogía:</strong> Como la presión del agua en una tubería.</p>
                </div>

                <div class="definition-box">
                    <h3>7.2 Corriente (I)</h3>
                    <p><strong>Definición:</strong> La corriente eléctrica es el flujo de carga eléctrica (electrones) a través de un conductor.</p>
                    <p><strong>Unidad:</strong> Amperio (A) | <strong>Símbolo:</strong> I</p>
                    <p><strong>Fórmula:</strong> I = Q / t (carga / tiempo)</p>
                    <p><strong>Analogía:</strong> Como el caudal de agua en una tubería.</p>
                </div>

                <div class="definition-box">
                    <h3>7.3 Resistencia (R)</h3>
                    <p><strong>Definición:</strong> La resistencia eléctrica es la oposición al flujo de corriente eléctrica.</p>
                    <p><strong>Unidad:</strong> Ohmio (Ω) | <strong>Símbolo:</strong> R</p>
                    <p><strong>Ley de Ohm:</strong> V = I × R</p>
                    <p><strong>Analogía:</strong> Como el diámetro de una tubería (más estrecha = mayor resistencia).</p>
                </div>

                <div class="definition-box">
                    <h3>7.4 Potencia (P)</h3>
                    <p><strong>Definición:</strong> La potencia eléctrica es la velocidad a la que se consume o genera energía eléctrica.</p>
                    <p><strong>Unidad:</strong> Vatio o Watt (W) | <strong>Símbolo:</strong> P</p>
                    <p><strong>Fórmulas:</strong> P = V × I | P = I² × R | P = V² / R</p>
                </div>

                <div class="definition-box">
                    <h3>7.5 Frecuencia (f)</h3>
                    <p><strong>Definición:</strong> La frecuencia es el número de ciclos completos que ocurren en un segundo en una señal periódica.</p>
                    <p><strong>Unidad:</strong> Hertz (Hz) | <strong>Símbolo:</strong> f</p>
                    <p><strong>Relación:</strong> f = 1 / T (donde T es el período)</p>
                </div>

                <div class="calculator-box">
                    <h4>Calculadora de Ley de Ohm</h4>
                    <div class="section-image">
                        <img src="images/LeyDeOhm.png" alt="Ley de Ohm" style="max-height:150px;width:auto;object-fit:contain;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0 0 1rem 0">
                    </div>
                    <div class="calc-input">
                        <label>Voltaje (V):</label>
                        <input type="number" id="ohmVoltage" placeholder="">
                    </div>
                    <div class="calc-input">
                        <label>Corriente (A):</label>
                        <input type="number" id="ohmCurrent" placeholder="">
                    </div>
                    <button class="btn-calc" onclick="calculateOhm()">Calcular Resistencia</button>
                    <div class="calc-result" id="ohmResult"></div>
                </div>

                <div class="calculator-box">
                    <h4>Calculadora de Ley de Watt</h4>
                    <div class="section-image">
                        <img src="images/LeyDeWatt.png" alt="Ley de Watt" style="max-height:150px;width:auto;object-fit:contain;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0 0 1rem 0">
                    </div>
                    <div class="calc-input">
                        <label>Voltaje (V):</label>
                        <input type="number" id="wattCalcVoltage" placeholder="">
                    </div>
                    <div class="calc-input">
                        <label>Corriente (A):</label>
                        <input type="number" id="wattCalcCurrent" placeholder="">
                    </div>
                    <button class="btn-calc" onclick="calculateWatt()">Calcular Potencia</button>
                    <div class="calc-result" id="wattCalcResult"></div>
                </div>
            </div>
        `
    },
    tema8: {
        title: '8. Tabla Resumen de Magnitudes',
        content: `
            <h2 class="section-title">8. Tabla Resumen de Magnitudes Eléctricas</h2>
            <div class="content-card">
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Magnitud</th>
                                <th>Símbolo</th>
                                <th>Unidad</th>
                                <th>Símbolo Unidad</th>
                                <th>Fórmula Principal</th>
                                <th>Analogía</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Voltaje</td>
                                <td>V, U</td>
                                <td>Voltio</td>
                                <td>V</td>
                                <td>V = I × R</td>
                                <td>Presión del agua</td>
                            </tr>
                            <tr>
                                <td>Corriente</td>
                                <td>I</td>
                                <td>Amperio</td>
                                <td>A</td>
                                <td>I = V / R</td>
                                <td>Caudal de agua</td>
                            </tr>
                            <tr>
                                <td>Resistencia</td>
                                <td>R</td>
                                <td>Ohmio</td>
                                <td>Ω</td>
                                <td>R = V / I</td>
                                <td>Diámetro de tubería</td>
                            </tr>
                            <tr>
                                <td>Potencia</td>
                                <td>P</td>
                                <td>Vatio</td>
                                <td>W</td>
                                <td>P = V × I</td>
                                <td>Trabajo realizado</td>
                            </tr>
                            <tr>
                                <td>Frecuencia</td>
                                <td>f</td>
                                <td>Hertz</td>
                                <td>Hz</td>
                                <td>f = 1 / T</td>
                                <td>Oscilaciones por segundo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="key-points">
                    <h3>Múltiplos y Submúltiplos Comunes</h3>
                    <ul>
                        <li><strong>Giga (G):</strong> 10⁹ - Ejemplo: 1 GHz = 1,000,000,000 Hz</li>
                        <li><strong>Mega (M):</strong> 10⁶ - Ejemplo: 1 MΩ = 1,000,000 Ω</li>
                        <li><strong>Kilo (k):</strong> 10³ - Ejemplo: 1 kΩ = 1,000 Ω</li>
                        <li><strong>mili (m):</strong> 10⁻³ - Ejemplo: 1 mA = 0.001 A</li>
                        <li><strong>micro (μ):</strong> 10⁻⁶ - Ejemplo: 1 μF = 0.000001 F</li>
                        <li><strong>nano (n):</strong> 10⁻⁹ - Ejemplo: 1 nF = 0.000000001 F</li>
                        <li><strong>pico (p):</strong> 10⁻¹² - Ejemplo: 1 pF = 0.000000000001 F</li>
                    </ul>
                </div>
            </div>
        `
    },
    tema9: {
        title: '9. Mediciones Eléctricas',
        content: `
            <h2 class="section-title">9. Mediciones Eléctricas</h2>
            <div class="content-card">
                <p style="margin-bottom: 2rem;">Las mediciones eléctricas son fundamentales para verificar el funcionamiento de circuitos, diagnosticar fallas y validar diseños. El multímetro es la herramienta principal.</p>
                
                <div class="warning-box">
                    <h4>9.1 Medición de Voltaje</h4>
                    <p><strong>Conexión:</strong> En PARALELO con el componente</p>
                    <p><strong>Precaución:</strong> Nunca medir voltaje en modo amperímetro</p>
                </div>
                <div class="section-image">
                    <img src="images/MedirVoltaje.png" alt="Medición de Voltaje" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

                <div class="warning-box">
                    <h4>9.2 Medición de Corriente</h4>
                    <p><strong>Conexión:</strong> En SERIE con el circuito (abrir el circuito)</p>
                    <p><strong>Precaución:</strong> NUNCA conectar en paralelo (causará cortocircuito)</p>
                </div>
                <div class="section-image">
                    <img src="images/MedirCorriente.png" alt="Medición de Corriente" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

                <div class="tips-box">
                    <h4>9.3 Medición de Resistencia</h4>
                    <p><strong>Importante:</strong> Desconectar la alimentación del circuito</p>
                    <p><strong>Consejo:</strong> Aislar el componente para medición precisa</p>
                </div>
                <div class="section-image">
                    <img src="images/MedirResistencia.png" alt="Medición de Resistencia" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

            </div>
        `
    },
    tema10: {
        title: '10. Resistencias',
        content: `
            <h2 class="section-title">10. Resistencias</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>10.1 Definición y Funcionamiento</h3>
                    <p>Una resistencia (o resistor) es un componente pasivo que se opone al flujo de corriente eléctrica. Convierte energía eléctrica en calor (efecto Joule).</p>
                </div>

                <div class="key-points">
                    <h3>10.2 Unidad de Medida</h3>
                    <p><strong>Unidad:</strong> Ohmio (Ω)</p>
                    <ul>
                        <li>1 Ω = Ohmio (unidad base)</li>
                        <li>1 kΩ = 1,000 Ω (kilo-ohmio)</li>
                        <li>1 MΩ = 1,000,000 Ω (mega-ohmio)</li>
                    </ul>
                </div>

                <div class="warning-box">
                    <div style="display:flex;gap:0;align-items:flex-start;flex-wrap:wrap">
                        <div style="flex:1;min-width:200px">
                            <h3>10.3 Código de Colores</h3>
                            <p><strong>Sistema de 4 bandas:</strong> Dígito1 - Dígito2 - Multiplicador - Tolerancia</p>
                            <p><strong>Ejemplo:</strong> Marrón-Negro-Rojo-Dorado = 10 × 100 = 1,000Ω = 1kΩ ±5%</p>
                        </div>
                        <img src="images/resistencia.png" alt="Resistencia" style="width:160px;flex-shrink:0;margin-left:-0.5rem;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.2))">
                    </div>
                </div>

                <div class="color-table-wrapper">
                    <svg viewBox="0 0 700 530" style="width:100%;max-width:700px;margin:1.5rem auto;display:block;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1)">
                        <rect width="700" height="440" fill="#f8fafc" rx="12"/>
                        <rect x="0" y="0" width="700" height="42" fill="#1e293b" rx="12"/>
                        <rect x="0" y="20" width="700" height="22" fill="#1e293b"/>
                        <text x="350" y="27" text-anchor="middle" fill="#fff" font-size="15" font-weight="bold">Tabla de Código de Colores para Resistencias</text>
                        
                        <text x="96" y="62" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">Color</text>
                        <text x="220" y="62" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">1ª Banda</text>
                        <text x="350" y="62" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">2ª Banda</text>
                        <text x="480" y="62" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">Multiplicador</text>
                        <text x="610" y="62" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">Tolerancia</text>
                        <line x1="20" y1="70" x2="680" y2="70" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="75" width="40" height="28" rx="4" fill="#000"/>
                        <text x="96" y="93" text-anchor="middle" fill="#334155" font-size="12">Negro</text>
                        <text x="220" y="93" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <text x="350" y="93" text-anchor="middle" fill="#334155" font-size="12">0</text>
                        <text x="480" y="93" text-anchor="middle" fill="#334155" font-size="12">×1</text>
                        <text x="610" y="93" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <line x1="20" y1="108" x2="680" y2="108" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="113" width="40" height="28" rx="4" fill="#8b4513"/>
                        <text x="96" y="131" text-anchor="middle" fill="#334155" font-size="12">Marrón</text>
                        <text x="220" y="131" text-anchor="middle" fill="#334155" font-size="12">1</text>
                        <text x="350" y="131" text-anchor="middle" fill="#334155" font-size="12">1</text>
                        <text x="480" y="131" text-anchor="middle" fill="#334155" font-size="12">×10</text>
                        <text x="610" y="131" text-anchor="middle" fill="#334155" font-size="12">±1%</text>
                        <line x1="20" y1="146" x2="680" y2="146" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="151" width="40" height="28" rx="4" fill="#dc2626"/>
                        <text x="96" y="169" text-anchor="middle" fill="#334155" font-size="12">Rojo</text>
                        <text x="220" y="169" text-anchor="middle" fill="#334155" font-size="12">2</text>
                        <text x="350" y="169" text-anchor="middle" fill="#334155" font-size="12">2</text>
                        <text x="480" y="169" text-anchor="middle" fill="#334155" font-size="12">×100</text>
                        <text x="610" y="169" text-anchor="middle" fill="#334155" font-size="12">±2%</text>
                        <line x1="20" y1="184" x2="680" y2="184" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="189" width="40" height="28" rx="4" fill="#ea580c"/>
                        <text x="96" y="207" text-anchor="middle" fill="#334155" font-size="12">Naranja</text>
                        <text x="220" y="207" text-anchor="middle" fill="#334155" font-size="12">3</text>
                        <text x="350" y="207" text-anchor="middle" fill="#334155" font-size="12">3</text>
                        <text x="480" y="207" text-anchor="middle" fill="#334155" font-size="12">×1K</text>
                        <text x="610" y="207" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <line x1="20" y1="222" x2="680" y2="222" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="227" width="40" height="28" rx="4" fill="#eab308"/>
                        <text x="96" y="245" text-anchor="middle" fill="#334155" font-size="12">Amarillo</text>
                        <text x="220" y="245" text-anchor="middle" fill="#334155" font-size="12">4</text>
                        <text x="350" y="245" text-anchor="middle" fill="#334155" font-size="12">4</text>
                        <text x="480" y="245" text-anchor="middle" fill="#334155" font-size="12">×10K</text>
                        <text x="610" y="245" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <line x1="20" y1="260" x2="680" y2="260" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="265" width="40" height="28" rx="4" fill="#16a34a"/>
                        <text x="96" y="283" text-anchor="middle" fill="#334155" font-size="12">Verde</text>
                        <text x="220" y="283" text-anchor="middle" fill="#334155" font-size="12">5</text>
                        <text x="350" y="283" text-anchor="middle" fill="#334155" font-size="12">5</text>
                        <text x="480" y="283" text-anchor="middle" fill="#334155" font-size="12">×100K</text>
                        <text x="610" y="283" text-anchor="middle" fill="#334155" font-size="12">±0.5%</text>
                        <line x1="20" y1="298" x2="680" y2="298" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="303" width="40" height="28" rx="4" fill="#2563eb"/>
                        <text x="96" y="321" text-anchor="middle" fill="#334155" font-size="12">Azul</text>
                        <text x="220" y="321" text-anchor="middle" fill="#334155" font-size="12">6</text>
                        <text x="350" y="321" text-anchor="middle" fill="#334155" font-size="12">6</text>
                        <text x="480" y="321" text-anchor="middle" fill="#334155" font-size="12">×1M</text>
                        <text x="610" y="321" text-anchor="middle" fill="#334155" font-size="12">±0.25%</text>
                        <line x1="20" y1="336" x2="680" y2="336" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="341" width="40" height="28" rx="4" fill="#7c3aed"/>
                        <text x="96" y="359" text-anchor="middle" fill="#334155" font-size="12">Violeta</text>
                        <text x="220" y="359" text-anchor="middle" fill="#334155" font-size="12">7</text>
                        <text x="350" y="359" text-anchor="middle" fill="#334155" font-size="12">7</text>
                        <text x="480" y="359" text-anchor="middle" fill="#334155" font-size="12">×10M</text>
                        <text x="610" y="359" text-anchor="middle" fill="#334155" font-size="12">±0.1%</text>
                        <line x1="20" y1="374" x2="680" y2="374" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="379" width="40" height="28" rx="4" fill="#94a3b8"/>
                        <text x="96" y="397" text-anchor="middle" fill="#334155" font-size="12">Gris</text>
                        <text x="220" y="397" text-anchor="middle" fill="#334155" font-size="12">8</text>
                        <text x="350" y="397" text-anchor="middle" fill="#334155" font-size="12">8</text>
                        <text x="480" y="397" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <text x="610" y="397" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <line x1="20" y1="412" x2="680" y2="412" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="417" width="40" height="28" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
                        <text x="96" y="435" text-anchor="middle" fill="#334155" font-size="12">Blanco</text>
                        <text x="220" y="435" text-anchor="middle" fill="#334155" font-size="12">9</text>
                        <text x="350" y="435" text-anchor="middle" fill="#334155" font-size="12">9</text>
                        <text x="480" y="435" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <text x="610" y="435" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <line x1="20" y1="450" x2="680" y2="450" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="455" width="40" height="28" rx="4" fill="#fbbf24"/>
                        <text x="96" y="473" text-anchor="middle" fill="#334155" font-size="12">Dorado</text>
                        <text x="220" y="473" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <text x="350" y="473" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <text x="480" y="473" text-anchor="middle" fill="#334155" font-size="12">×0.1</text>
                        <text x="610" y="473" text-anchor="middle" fill="#334155" font-size="12">±5%</text>
                        <line x1="20" y1="488" x2="680" y2="488" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <rect x="30" y="493" width="40" height="28" rx="4" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
                        <text x="96" y="511" text-anchor="middle" fill="#334155" font-size="12">Plateado</text>
                        <text x="220" y="511" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <text x="350" y="511" text-anchor="middle" fill="#334155" font-size="12">—</text>
                        <text x="480" y="511" text-anchor="middle" fill="#334155" font-size="12">×0.01</text>
                        <text x="610" y="511" text-anchor="middle" fill="#334155" font-size="12">±10%</text>
                    </svg>
                </div>

                <div class="calculator-box" style="margin-top:2rem">
                    <h3>10.4 Calculadora de Código de Colores</h3>
                    <p style="font-size:0.9rem;color:#64748b;margin-bottom:1rem">Haz clic sobre cada banda de la resistencia para seleccionar su color</p>
                    <div id="colorResistorSVG" style="margin:0 0 1rem 0;text-align:center;cursor:pointer;position:relative"></div>
                    <div id="colorPalette" style="display:none;position:absolute;background:#fff;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.2);padding:0.75rem;z-index:100;max-width:320px"></div>
                    <div class="calc-result" id="colorCalcResult">
                        <div class="calc-result-wrapper">
                            <div class="calc-result-value">1,000 Ω = 1 kΩ</div>
                            <div class="calc-result-detail">Marrón · Rojo · ×10 (Marrón) · ±5% (Dorado)</div>
                        </div>
                    </div>
                    <hr style="margin:1.5rem 0;border:none;border-top:1px solid #e2e8f0">
                    <h4 style="margin-bottom:0.5rem">Valor → Colores</h4>
                    <div class="calc-row">
                        <div class="calc-col" style="flex:3">
                            <label style="font-weight:600;font-size:0.9rem">Valor en Ω</label>
                            <input type="number" id="valueToColor" placeholder="Ej: 1000" oninput="updateValueToColor()" style="width:100%;padding:0.6rem;border:1px solid #cbd5e1;border-radius:8px;font-size:0.9rem">
                        </div>
                        <div class="calc-col" style="flex:1">
                            <label style="font-weight:600;font-size:0.9rem">Tolerancia</label>
                            <select id="valueToColorTol" onchange="updateValueToColor()" style="width:100%;padding:0.6rem;border:1px solid #cbd5e1;border-radius:8px;background:#fff;font-size:0.9rem">
                                <option value="1">±1%</option><option value="2">±2%</option><option value="5" selected>±5%</option><option value="10">±10%</option>
                            </select>
                        </div>
                    </div>
                    <div id="valueToColorSVG" style="margin:1.5rem 0;text-align:center"></div>
                    <div class="calc-result" id="valueToColorResult">
                        <div class="calc-result-wrapper">
                            <div class="calc-result-detail">Ingresa un valor para ver sus colores</div>
                        </div>
                    </div>
                </div>

                <div class="calculator-box">
                    <h3>10.5 Calculadora de resistencia serie</h3>
                    <img src="images/Rserie.png" alt="Resistencias en serie" style="width:280px;margin:0 0 1rem 0;display:block;border-radius:8px;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.15))">
                    <div class="calc-input">
                        <label>R1 (Ω):</label>
                        <input type="number" id="seriesR1" placeholder="">
                    </div>
                    <div class="calc-input">
                        <label>R2 (Ω):</label>
                        <input type="number" id="seriesR2" placeholder="">
                    </div>
                    <button class="btn-calc" onclick="calculateSeries()">Calcular Serie</button>
                    <div class="calc-result" id="seriesResult"></div>
                </div>

                <div class="calculator-box">
                    <h3>10.6 Calculadora de resistencias paralelo</h3>
                    <img src="images/Rparalelo.png" alt="Resistencias en paralelo" style="width:280px;margin:0 0 1rem 0;display:block;border-radius:8px;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.15))">
                    <div class="calc-input">
                        <label>R1 (Ω):</label>
                        <input type="number" id="parallelR1" placeholder="">
                    </div>
                    <div class="calc-input">
                        <label>R2 (Ω):</label>
                        <input type="number" id="parallelR2" placeholder="">
                    </div>
                    <button class="btn-calc" onclick="calculateParallel()">Calcular Paralelo</button>
                    <div class="calc-result" id="parallelResult"></div>
                </div>

                <div class="tips-box">
                    <div style="display:flex;gap:1.5rem;align-items:flex-start;flex-wrap:wrap">
                        <div style="flex:1;min-width:200px">
                            <h3>10.6 Fallas Típicas</h3>
                            <ul>
                                <li><strong>Abierta:</strong> Resistencia infinita (OL)</li>
                                <li><strong>Corto:</strong> Resistencia cercana a 0Ω</li>
                                <li><strong>Alterada:</strong> Valor fuera del rango de tolerancia</li>
                            </ul>
                        </div>
                        <img src="images/RFallos.png" alt="Fallas en resistencias" style="width:620px;flex-shrink:0;border-radius:8px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.15))">
                    </div>
                </div>

                <div class="key-points">
                    <div style="display:flex;gap:1.5rem;align-items:flex-start;flex-wrap:wrap">
                        <div style="flex:1;min-width:200px">
                            <h3>10.7 Resistencias Variables</h3>
                            <ul>
                                <li><strong>Potenciómetro:</strong> 3 terminales, control de voltaje</li>
                                <li><strong>Reóstato:</strong> 2 terminales, control de corriente</li>
                                <li><strong>LDR:</strong> Varía con la luz</li>
                                <li><strong>Termistor:</strong> Varía con la temperatura</li>
                            </ul>
                        </div>
                        <img src="images/Rvariables.png" alt="Resistencias variables" style="width:620px;flex-shrink:0;border-radius:8px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.15))">
                    </div>
                </div>
            </div>
        `
    },
    tema11: {
        title: '11. Condensadores',
        content: `
            <h2 class="section-title">11. Condensadores</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>11.1 Definición y Estructura</h3>
                    <p>Un condensador (o capacitor) es un componente pasivo que almacena energía en forma de campo eléctrico. Consiste en dos placas conductoras separadas por un material dieléctrico.</p>
                </div>
                <div class="section-image">
                    <img src="images/condensador.png" alt="Condensador" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

                <div class="key-points">
                    <h3>11.2 Unidad de Medida</h3>
                    <p><strong>Unidad:</strong> Faradio (F) - muy grande, se usan submúltiplos</p>
                    <ul>
                        <li>1 mF = 0.001 F = 1,000 μF</li>
                        <li>1 μF = 0.000001 F = 1,000 nF</li>
                        <li>1 nF = 0.000000001 F = 1,000 pF</li>
                        <li>1 pF = 0.000000000001 F</li>
                    </ul>
                </div>

                <div class="warning-box">
                    <h3>11.3 Condensadores Electrolíticos (Polarizados)</h3>
                    <p><strong>⚠️ Tienen polaridad:</strong> Conectar + a positivo, - a negativo</p>
                    <p><strong>Inversión puede causar explosión</strong></p>
                    <p>Alta capacitancia (1μF a miles de μF), usados en filtrado de fuentes</p>
                </div>
                <div class="section-image">
                    <img src="images/condensadorElectrolitico.png" alt="Condensador Electrolítico" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

                <div class="tips-box">
                    <h3>11.5 Condensadores Cerámicos (No polarizados)</h3>
                    <p>Sin polaridad, pequeños, económicos</p>
                    <p>Capacitancia baja a media (1pF a 10μF)</p>
                    <p>Ideales para desacoplamiento y alta frecuencia</p>
                </div>
                <div class="section-image">
                    <img src="images/condensadorCeramico.png" alt="Condensador Cerámico" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

            </div>
        `
    },
    tema12: {
        title: '12. Transistor',
        content: `
            <h2 class="section-title">12. Transistor</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>12.1 Definición y Usos</h3>
                    <p>El transistor es un dispositivo semiconductor de tres terminales que puede amplificar señales o actuar como interruptor electrónico.</p>
                    <p><strong>Usos:</strong> Interruptor (ON/OFF) y Amplificador de señales</p>
                </div>
                <div class="section-image">
                    <img src="images/transistor.png" alt="Transistor" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

                <div class="tips-box">
                    <h3>12.2 Tipos de Empaque</h3>
                    <ul>
                        <li><strong>TO-92:</strong> Plástico, 3 pines, baja potencia (BC547, 2N3904)</li>
                        <li><strong>TO-220:</strong> Con aleta, media-alta potencia (TIP31, TIP41)</li>
                        <li><strong>SOT-23:</strong> SMD pequeño, muy baja potencia</li>
                    </ul>
                    <p>⚠️ <strong>Siempre consultar datasheet para pinout</strong></p>
                </div>
                <div class="section-image">
                    <img src="images/empaquesTransistor.png" alt="Empaques de Transistor" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>
            </div>
        `
    },
    tema13: {
        title: '13. Circuito Integrado',
        content: `
            <h2 class="section-title">13. Circuito Integrado</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>13.1 Definición y Usos</h3>
                    <p>Un Circuito Integrado (CI o IC) es un conjunto de componentes electrónicos (transistores, resistencias, capacitores, diodos) fabricados e interconectados en un solo chip de silicio.</p>
                </div>
                <div class="section-image">
                    <img src="images/circuitoIntegrado.png" alt="Circuito Integrado" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

                <div class="warning-box">
                    <h3>13.3 Determinación de Pines (Pinout)</h3>
                    <p><strong>Marcas de referencia:</strong> Muesca, punto o círculo indica pin 1</p>
                    <p><strong>DIP:</strong> Pin 1 arriba-izquierda, numeración antihoraria</p>
                    <p><strong>⚠️ SIEMPRE consultar datasheet antes de conectar</strong></p>
                    <p>Diferentes fabricantes pueden usar pinouts distintos</p>
                </div>
                <div class="section-image">
                    <img src="images/pinoutIC.png" alt="Pinout de Circuito Integrado" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

                <div class="tips-box">
                    <h3>Consejos</h3>
                    <ul>
                        <li>Usar socket (zócalo) facilita el reemplazo</li>
                        <li>Verificar orientación antes de insertar</li>
                        <li>Conectar GND y VCC correctamente primero</li>
                        <li>No asumir pinout sin verificar</li>
                    </ul>
                </div>
                <div class="section-image">
                    <img src="images/tipsIC.png" alt="Consejos para Circuitos Integrados" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>
            </div>
        `
    },
    tema14: {
        title: '14. Simulación Electrónica',
        content: `
            <h2 class="section-title">14. Simulación Electrónica</h2>
            <div class="content-card">
                <div class="definition-box">
                    <h3>14.1 Definición</h3>
                    <p>La simulación electrónica es el proceso de modelar y analizar el comportamiento de circuitos electrónicos mediante software, antes de construirlos físicamente.</p>
                </div>
                <div class="section-image">
                    <img src="images/simuladores.png" alt="Simulación Electrónica" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>

                <div class="definition-box">
                    <h3>14.2 Protoboard (Breadboard)</h3>
                    <p>Placa de pruebas reutilizable que permite montar circuitos temporalmente sin soldadura.</p>
                    <p><strong>Estructura:</strong></p>
                    <ul>
                        <li><strong>Buses laterales:</strong> Líneas verticales conectadas (+ y -) para alimentación</li>
                        <li><strong>Área central:</strong> Filas de 5 orificios conectados horizontalmente</li>
                        <li><strong>Canal central:</strong> Separa los dos grupos, ideal para CIs</li>
                    </ul>
                </div>

                <div class="tips-box">
                    <h3>Usos del Protoboard</h3>
                    <ul>
                        <li>Prototipado rápido de circuitos</li>
                        <li>Pruebas y experimentación</li>
                        <li>Educación y aprendizaje</li>
                        </ul>
                    </div>
                <div class="section-image">
                    <img src="images/protoboard.png" alt="Protoboard" style="width:100%;border-radius:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));display:block;margin:0.5rem 0 1.5rem 0">
                </div>
                </div>
            </div>
        `
    },
    tema15: {
        title: '15. Taller de Simulación',
        content: `
            <h2 class="section-title">15. Taller de Simulación Electrónica</h2>
            <div class="content-card">
                <p style="margin-bottom: 2rem; font-size: 1.1rem;">¡Es hora de poner en práctica todo lo aprendido! Haz clic en cada ejercicio para ver los componentes, el diagrama y el enlace a Tinkercad.</p>
                
                <div class="exercises-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; margin: 2rem 0;">

                    <div class="exercise-card" style="background: var(--card-bg); padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-md); border-left: 4px solid var(--accent-color); cursor: pointer; transition: var(--transition); min-height: 120px; display: flex; align-items: center;" onclick="toggleExercise('15-1', this)">
                        <h4 style="color: var(--accent-color); margin: 0; font-size: 1.2rem;">⚡ 15.1 Juego de Luces con 555</h4>
                    </div>

                    <div class="exercise-card" style="background: var(--card-bg); padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-md); border-left: 4px solid var(--danger-color); cursor: pointer; transition: var(--transition); min-height: 120px; display: flex; align-items: center;" onclick="toggleExercise('15-2', this)">
                        <h4 style="color: var(--danger-color); margin: 0; font-size: 1.2rem;">🔢 15.2 Contador 0-9 con 7448</h4>
                    </div>

                </div>
            </div>
        `
    },
};

// ===== CONFIGURACIÓN Y DATOS GLOBALES =====
const TINKERCAD_URLS = {
    login: 'https://www.tinkercad.com/login',
    signup: 'https://www.tinkercad.com/join',
    circuits: 'https://www.tinkercad.com/circuits',
    embed: 'https://www.tinkercad.com/embed'
};
// Datos de componentes para el visor 3D
const componentsData = {
    'resistor-1k': {
        name: 'Resistencia 1kΩ',
        specs: [
            'Valor: 1,000 Ω (1kΩ)',
            'Tolerancia: ±5%',
            'Potencia: 1/4W (0.25W)',
            'Código de colores: Marrón-Negro-Rojo-Dorado',
            'Tipo: Carbón película'
        ]
    },
    'led-red': {
        name: 'LED Rojo',
        specs: [
            'Color: Rojo',
            'Voltaje directo: 1.8-2.2V',
            'Corriente máxima: 20mA',
            'Corriente típica: 10-15mA',
            'Polaridad: Pata larga (+), pata corta (-)'
        ]
    },
    'capacitor-electrolytic': {
        name: 'Condensador Electrolítico 100μF',
        specs: [
            'Capacitancia: 100μF',
            'Voltaje: 25V',
            'Tipo: Electrolítico polarizado',
            'Tolerancia: ±20%',
            'Polaridad: Terminal largo (+), corto (-)'
        ]
    },
    'transistor-npn': {
        name: 'Transistor NPN 2N2222',
        specs: [
            'Tipo: NPN Bipolar',
            'Modelo: 2N2222',
            'Encapsulado: TO-92',
            'Pines: C-B-E (Colector-Base-Emisor)',
            'Ganancia (hFE): 100-300',
            'Voltaje máximo: 40V',
            'Corriente máxima: 800mA'
        ]
    },
    'ic-555': {
        name: 'CI 555 Timer',
        specs: [
            'Tipo: Temporizador',
            'Encapsulado: DIP-8',
            'Voltaje: 4.5V - 16V',
            'Modos: Astable, Monoestable',
            'Pines: 8 (GND, TRIG, OUT, RST, CTRL, THR, DIS, VCC)'
        ]
    },
    'protoboard': {
        name: 'Protoboard',
        specs: [
            'Tipo: Placa de pruebas sin soldadura',
            'Orificios: 830 puntos típico',
            'Buses: 2 positivos, 2 negativos',
            'Conexiones: 5 orificios por fila',
            'Uso: Prototipado rápido'
        ]
    }
};

// Datos de ejercicios del taller
const exercisesData = {
    '15-1': {
        title: 'Juego de Luces con 555',
        objective: 'Usar un CI 555 en modo astable para generar una secuencia de LEDs',
        materials: [
            { id: 'ic-555', name: 'CI 555', qty: 1 },
            { id: 'led-red', name: 'LED Rojo', qty: 1 },
            { id: 'led-green', name: 'LED Verde', qty: 1 },
            { id: 'resistor-1k', name: 'Resistencia 1kΩ', qty: 2 },
            { id: 'resistor-220', name: 'Resistencia 220Ω', qty: 2 },
            { id: 'capacitor-10uf', name: 'Condensador 10μF', qty: 1 },
            { id: 'potentiometer', name: 'Potenciómetro 100kΩ', qty: 1 },
            { id: 'power-5v', name: 'Fuente 5V', qty: 1 },
            { id: 'wires', name: 'Cables de conexión', qty: 'varios' }
        ],
        steps: [
            'Monta el 555 en modo astable básico',
            'Conecta un LED rojo a la salida (pin 3)',
            'Conecta un LED verde con polaridad inversa al rojo',
            'Reemplaza una resistencia fija por un potenciómetro',
            'Ajusta el potenciómetro y observa el cambio de velocidad',
            'Calcula el rango de frecuencias del circuito'
        ],
        checklist: [
            '555 en modo astable funcionando',
            'LEDs parpadean alternadamente',
            'Potenciómetro ajusta la velocidad',
            'Rango de frecuencias calculado'
        ]
    },
    '15-2': {
        title: 'Contador 0-9 con 7448',
        objective: 'Construir un contador decimal usando 555, 7490, 7448 y display 7 segmentos',
        materials: [
            { id: 'ic-555', name: 'CI 555', qty: 1 },
            { id: 'ic-7490', name: 'CI 7490', qty: 1 },
            { id: 'ic-7447', name: 'CI 7447', qty: 1 },
            { id: 'display-7seg', name: 'Display 7 segmentos', qty: 1 },
            { id: 'resistor-1k', name: 'Resistencia 1kΩ', qty: 2 },
            { id: 'resistor-10k', name: 'Resistencia 10kΩ', qty: 1 },
            { id: 'resistor-220', name: 'Resistencia 220Ω', qty: 7 },
            { id: 'capacitor-10uf', name: 'Condensador 10μF', qty: 1 },
            { id: 'capacitor-01uf', name: 'Condensador 0.1μF', qty: 1 },
            { id: 'power-5v', name: 'Fuente 5V', qty: 1 }
        ],
        steps: [
            'Monta el CI 555 en modo astable para generar pulsos',
            'Conecta la salida del 555 (pin 3) a la entrada del 7490 (pin 14)',
            'Conecta las salidas BCD del 7490 (QA, QB, QC, QD) al 7447',
            'Conecta las salidas del 7447 al display 7 segmentos',
            'Coloca resistencias de 220Ω en cada segmento del display',
            'Conecta VCC (5V) y GND a todos los CIs',
            'Ajusta la frecuencia del 555 con el condensador',
            'Verifica que el contador cuente de 0 a 9'
        ],
        checklist: [
            '555 montado y oscilando',
            '7490 contando correctamente',
            '7447 decodificando BCD',
            'Display mostrando números 0-9',
            'Circuito completo funcionando'
        ]
    }
};

const SECTION_ORDER = ['welcome', 'tema1', 'tema2', 'tema3', 'tema4', 'tema5', 'tema6', 'tema7', 'tema8', 'tema9', 'tema10', 'tema11', 'tema12', 'tema13', 'tema14', 'tema15'];

// ===== ESTADO DE LA APLICACIÓN =====
let currentSection = 'welcome';
let completedSections = new Set();
let currentExercise = null;
let svg3DViewer = null;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadSection('welcome');
});

function initializeApp() {
    console.log('🚀 Inicializando aplicación de electrónica...');
    updateProgress();
}

function setupEventListeners() {
    // Navegación del sidebar
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            navigateToSection(section);
        });
    });

    // Toggle sidebar en móvil
    const hamburger = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
    if (hamburger) {
        hamburger.addEventListener('click', toggleSidebar);
    }
    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
}

// ===== NAVEGACIÓN =====
function navigateToSection(sectionId) {
    currentSection = sectionId;
    loadSection(sectionId);
    updateActiveNav(sectionId);
    markSectionCompleted(sectionId);
    updateProgress();
    
    if (window.innerWidth <= 1024) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadSection(sectionId) {
    const mainContent = document.getElementById('mainContent');
    const sectionData = courseData[sectionId];
    
    if (sectionData) {
        mainContent.innerHTML = sectionData.content;
        mainContent.innerHTML += getSectionNav(sectionId);
    } else {
        mainContent.innerHTML = '<div class="content-card"><h2>Sección no encontrada</h2></div>';
    }
    
    if (document.getElementById('colorResistorSVG')) renderResistorCalc();
}

function getSectionNav(sectionId) {
    const idx = SECTION_ORDER.indexOf(sectionId);
    const prev = idx > 0 ? SECTION_ORDER[idx - 1] : null;
    const next = idx < SECTION_ORDER.length - 1 ? SECTION_ORDER[idx + 1] : null;
    const prevTitle = prev ? (prev === 'welcome' ? 'Inicio' : courseData[prev]?.title?.replace(/^\d+\.\s*/, '')) : '';
    const nextTitle = next ? courseData[next]?.title?.replace(/^\d+\.\s*/, '') : '';
    return `
        <div class="section-nav">
            ${prev ? `<button class="nav-arrow prev" onclick="navigateToSection('${prev}')">← ${prevTitle}</button>` : '<span></span>'}
            ${next ? `<button class="nav-arrow next" onclick="navigateToSection('${next}')">${nextTitle} →</button>` : '<span></span>'}
        </div>
    `;
}

function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
}

function markSectionCompleted(sectionId) {
    completedSections.add(sectionId);
}

function updateProgress() {
    const totalSections = 15;
    const completed = completedSections.size;
    const percentage = Math.round((completed / totalSections) * 100);
    
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        progressFill.style.width = percentage + '%';
        progressText.textContent = percentage + '% Completado';
    }
}

// ===== VISOR 3D DE COMPONENTES =====
class SVG3DViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.rotateX = 30;
        this.rotateY = 45;
        this.rotateZ = 0;
        this.scale = 1;
    }
    
    loadComponent(componentId) {
        const svgPath = `images/svg/components/${componentId}.svg`;
        const componentData = componentsData[componentId];
        
        fetch(svgPath)
            .then(response => response.text())
            .then(svgContent => {
                this.container.innerHTML = svgContent;
                this.applyTransform();
                this.loadSpecs(componentData);
                
                // Actualizar nombre del componente
                document.getElementById('componentName').textContent = componentData.name;
            })
            .catch(error => {
                console.error('Error cargando SVG:', error);
                this.container.innerHTML = '<p style="color: white; text-align: center;">Error cargando componente</p>';
            });
    }
    
    applyTransform() {
        const svg = this.container.querySelector('svg');
        if (svg) {
            svg.style.transform = `
                perspective(1000px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                scale(${this.scale})
            `;
            svg.style.transition = 'transform 0.3s ease';
        }
    }
    
    rotate(axis, value) {
        this[`rotate${axis}`] = parseFloat(value);
        this.applyTransform();
    }
    
    zoom(delta) {
        this.scale += delta;
        this.scale = Math.max(0.5, Math.min(3, this.scale));
        this.applyTransform();
    }
    
    reset() {
        this.rotateX = 30;
        this.rotateY = 45;
        this.rotateZ = 0;
        this.scale = 1;
        this.applyTransform();
    }
    
    loadSpecs(componentData) {
        const specsList = document.getElementById('componentSpecs');
        if (specsList && componentData) {
            specsList.innerHTML = componentData.specs
                .map(spec => `<li>${spec}</li>`)
                .join('');
        }
    }
}

function viewComponent3D(componentId) {
    const modal = document.getElementById('component3DViewer');
    modal.classList.add('active');
    
    if (!svg3DViewer) {
        svg3DViewer = new SVG3DViewer('svg3DContainer');
    }
    
    svg3DViewer.loadComponent(componentId);
    
    // Conectar controles
    document.getElementById('rotateX').oninput = (e) => svg3DViewer.rotate('X', e.target.value);
    document.getElementById('rotateY').oninput = (e) => svg3DViewer.rotate('Y', e.target.value);
    document.getElementById('rotateZ').oninput = (e) => svg3DViewer.rotate('Z', e.target.value);
}

function closeViewer3D() {
    document.getElementById('component3DViewer').classList.remove('active');
}

function zoomIn() {
    if (svg3DViewer) svg3DViewer.zoom(0.2);
}

function zoomOut() {
    if (svg3DViewer) svg3DViewer.zoom(-0.2);
}

function resetView() {
    if (svg3DViewer) svg3DViewer.reset();
}

// ===== TINKERCAD INTEGRATION =====
// ===== EJERCICIOS PRÁCTICOS (TEMA 15) =====
function toggleExercise(exerciseId, cardEl) {
    const existing = document.getElementById('exerciseOverlay');
    if (existing) {
        existing.remove();
        return;
    }
    const exercise = exercisesData[exerciseId];
    if (!exercise) return;
    const diagramSrc = exerciseId === '15-1' ? 'images/555.png' : 'images/contador.png';
    const overlay = document.createElement('div');
    overlay.id = 'exerciseOverlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:1000;display:flex;align-items:center;justify-content:center;padding:2rem';
    overlay.onclick = function(e) { if (e.target === overlay) overlay.remove(); };
    overlay.innerHTML = `
        <div style="background:#fff;border-radius:16px;max-width:800px;width:100%;max-height:90vh;overflow-y:auto;padding:2rem;position:relative;box-shadow:0 20px 60px rgba(0,0,0,0.3)">
            <button onclick="document.getElementById('exerciseOverlay').remove()" style="position:absolute;top:1rem;right:1rem;width:36px;height:36px;border-radius:50%;border:none;background:#f1f5f9;cursor:pointer;font-size:1.2rem;display:flex;align-items:center;justify-content:center;color:#64748b">✕</button>
            <h2 style="margin-bottom:0.5rem;color:#1e293b">${exercise.title}</h2>
            <div style="font-size:1rem;color:#475569;margin-bottom:1.5rem"><strong>🎯 Objetivo:</strong> ${exercise.objective}</div>
            <div style="margin-bottom:1.5rem">
                <strong style="color:#334155;display:block;margin-bottom:0.5rem">📐 Plano del Circuito:</strong>
                <img src="${diagramSrc}" alt="Diagrama ${exercise.title}" style="width:100%;max-height:400px;object-fit:contain;border-radius:12px;background:#f8fafc;padding:1rem;border:1px solid #e2e8f0;display:block" onerror="this.outerHTML='<div style=\\'padding:2rem;background:#f8fafc;border:2px dashed #cbd5e1;border-radius:12px;text-align:center;color:#94a3b8\\'>📄 Plano no disponible</div>'">
            </div>
            <a href="https://www.tinkercad.com/circuits" target="_blank" rel="noopener" style="display:inline-block;background:#2563eb;color:#fff;padding:0.8rem 2rem;border-radius:10px;text-decoration:none;font-weight:600;font-size:1rem;transition:background 0.2s" onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">🚀 Abrir Tinkercad</a>
        </div>
    `;
    document.body.appendChild(overlay);
}

function openTinkercadNewTab() {
    window.open(TINKERCAD_URLS.circuits, '_blank');
}

function viewDiagram3D(diagramId) {
    // Similar a viewComponent3D pero para diagramas
    viewComponent3D(diagramId.replace('exercise-', ''));
}

// ===== CALCULADORAS =====
function calculateOhm() {
    const voltage = parseFloat(document.getElementById('ohmVoltage').value);
    const current = parseFloat(document.getElementById('ohmCurrent').value);
    const resultDiv = document.getElementById('ohmResult');
    
    if (isNaN(voltage) || isNaN(current) || current === 0) {
        resultDiv.innerHTML = '<div class="calc-error">⚠️ Ingresa valores válidos (V e I)</div>';
        return;
    }
    
    const resistance = voltage / current;
    resultDiv.innerHTML = `
        <div class="calc-result-wrapper">
            <div class="calc-result-value"><strong>R</strong> = ${formatResistance(resistance)}</div>
            <div class="calc-result-detail">V = ${voltage}V &nbsp;·&nbsp; I = ${current}A</div>
            <div class="calc-result-formula">R = V / I = ${voltage} / ${current}</div>
        </div>
    `;
}

function calculatePower() {
    const voltage = parseFloat(document.getElementById('powerVoltage').value);
    const current = parseFloat(document.getElementById('powerCurrent').value);
    const resultDiv = document.getElementById('powerResult');
    
    if (isNaN(voltage) || isNaN(current)) {
        resultDiv.innerHTML = '<div class="calc-error">⚠️ Ingresa valores válidos (V e I)</div>';
        return;
    }
    
    const power = voltage * current;
    resultDiv.innerHTML = `
        <div class="calc-result-wrapper">
            <svg viewBox="0 0 200 140" style="width:160px;margin:0 auto 10px;display:block">
                <polygon points="100,10 30,120 170,120" fill="none" stroke="#10b981" stroke-width="3"/>
                <line x1="100" y1="10" x2="100" y2="120" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
                <text x="100" y="50" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">P</text>
                <text x="55" y="108" text-anchor="middle" fill="#2563eb" font-size="18" font-weight="bold">V</text>
                <text x="145" y="108" text-anchor="middle" fill="#ef4444" font-size="18" font-weight="bold">I</text>
                <text x="100" y="135" text-anchor="middle" fill="#64748b" font-size="11">P = V × I</text>
            </svg>
            <div class="calc-result-value"><strong>P</strong> = ${power.toFixed(2)} W</div>
            <div class="calc-result-detail">V = ${voltage}V &nbsp;·&nbsp; I = ${current}A</div>
            <div class="calc-result-formula">P = V × I = ${voltage} × ${current}</div>
        </div>
    `;
}

function calculateFrequency() {
    const period = parseFloat(document.getElementById('periodInput').value);
    const resultDiv = document.getElementById('frequencyResult');
    
    if (isNaN(period) || period === 0) {
        resultDiv.innerHTML = '<div class="calc-error">⚠️ Ingresa un período válido</div>';
        return;
    }
    
    const frequency = 1 / period;
    resultDiv.innerHTML = `
        <div class="calc-result-wrapper">
            <svg viewBox="0 0 240 100" style="width:200px;margin:0 auto 10px;display:block">
                <path d="M10 50 Q30 10 50 50 Q70 90 90 50 Q110 10 130 50 Q150 90 170 50 Q190 10 210 50 Q230 90 240 50" 
                      stroke="#2563eb" stroke-width="3" fill="none"/>
                <line x1="10" y1="50" x2="240" y2="50" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="5,3"/>
                <text x="120" y="85" text-anchor="middle" fill="#64748b" font-size="10">Onda periódica</text>
            </svg>
            <div class="calc-result-value"><strong>f</strong> = ${frequency.toFixed(3)} Hz</div>
            <div class="calc-result-detail">Período T = ${period} s</div>
            <div class="calc-result-formula">f = 1 / T = 1 / ${period}</div>
        </div>
    `;
}

function calculateSeries() {
    const r1 = parseFloat(document.getElementById('seriesR1').value);
    const r2 = parseFloat(document.getElementById('seriesR2').value);
    const resultDiv = document.getElementById('seriesResult');
    
    if (isNaN(r1) || isNaN(r2)) {
        resultDiv.innerHTML = '<div class="calc-error">⚠️ Ingresa valores válidos (R1 y R2)</div>';
        return;
    }
    
    const total = r1 + r2;
    resultDiv.innerHTML = `
        <div class="calc-result-wrapper">
            <div class="calc-result-value"><strong>R<sub>total</sub></strong> = ${formatResistance(total)}</div>
            <div class="calc-result-detail">R1 = ${formatResistance(r1)} &nbsp;·&nbsp; R2 = ${formatResistance(r2)}</div>
            <div class="calc-result-formula">R<sub>total</sub> = R1 + R2 = ${r1} + ${r2}</div>
        </div>
    `;
}

function calculateWatt() {
    const voltage = parseFloat(document.getElementById('wattCalcVoltage').value);
    const current = parseFloat(document.getElementById('wattCalcCurrent').value);
    const resultDiv = document.getElementById('wattCalcResult');
    
    if (isNaN(voltage) || isNaN(current)) {
        resultDiv.innerHTML = '<div class="calc-error">⚠️ Ingresa valores válidos (V e I)</div>';
        return;
    }
    
    const power = voltage * current;
    resultDiv.innerHTML = `
        <div class="calc-result-wrapper">
            <div class="calc-result-value"><strong>P</strong> = ${power.toFixed(2)} W</div>
            <div class="calc-result-detail">V = ${voltage}V &nbsp;·&nbsp; I = ${current}A</div>
            <div class="calc-result-formula">P = V × I = ${voltage} × ${current}</div>
        </div>
    `;
}

function calculateParallel() {
    const r1 = parseFloat(document.getElementById('parallelR1').value);
    const r2 = parseFloat(document.getElementById('parallelR2').value);
    const resultDiv = document.getElementById('parallelResult');
    
    if (isNaN(r1) || isNaN(r2)) {
        resultDiv.innerHTML = '<div class="calc-error">⚠️ Ingresa valores válidos (R1 y R2)</div>';
        return;
    }
    
    const total = (r1 * r2) / (r1 + r2);
    resultDiv.innerHTML = `
        <div class="calc-result-wrapper">
            <div class="calc-result-value"><strong>R<sub>total</sub></strong> = ${formatResistance(total)}</div>
            <div class="calc-result-detail">R1 = ${formatResistance(r1)} &nbsp;·&nbsp; R2 = ${formatResistance(r2)}</div>
            <div class="calc-result-formula" style="text-align:left">
                R<sub>t</sub> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 4px">
                    <span style="border-bottom:2px solid #64748b;padding:0 8px 2px">${r1} × ${r2}</span>
                    <span style="padding:2px 8px 0">${r1} + ${r2}</span>
                </span> = ${formatResistance(total)}
            </div>
        </div>
    `;
}

// ===== CALCULADORA DE CÓDIGO DE COLORES (BIDIRECCIONAL) =====
const colorValues = {
    black: { digit: 0, mult: 1, color: '#000000' },
    brown: { digit: 1, mult: 10, tol: 1, color: '#8b4513' },
    red: { digit: 2, mult: 100, tol: 2, color: '#ff0000' },
    orange: { digit: 3, mult: 1000, color: '#ffa500' },
    yellow: { digit: 4, mult: 10000, color: '#ffff00' },
    green: { digit: 5, mult: 100000, tol: 0.5, color: '#00ff00' },
    blue: { digit: 6, mult: 1000000, tol: 0.25, color: '#0000ff' },
    violet: { digit: 7, mult: 10000000, tol: 0.1, color: '#9400d3' },
    gray: { digit: 8, tol: 0.05, color: '#808080' },
    white: { digit: 9, color: '#ffffff' },
    gold: { mult: 0.1, tol: 5, color: '#ffd700' },
    silver: { mult: 0.01, tol: 10, color: '#c0c0c0' }
};

function updateResistorColor(bandNumber, colorName) {
    const band = document.getElementById(`band${bandNumber}`);
    if (band && colorValues[colorName]) {
        band.setAttribute('fill', colorValues[colorName].color);
    }
}

function calculateFromColors() {
    const band1 = document.getElementById('band1Select').value;
    const band2 = document.getElementById('band2Select').value;
    const band3 = document.getElementById('band3Select').value;
    const band4 = document.getElementById('band4Select').value;
    
    const c1 = colorValues[band1];
    const c2 = colorValues[band2];
    const c3 = colorValues[band3];
    const c4 = colorValues[band4];
    
    const digit1 = c1.digit;
    const digit2 = c2.digit;
    const multiplier = c3.mult;
    const tolerance = c4.tol || '?';
    
    const value = (digit1 * 10 + digit2) * multiplier;
    
    const resultDiv = document.getElementById('colorResult');
    resultDiv.innerHTML = `
        <div class="calc-result-wrapper">
            <svg viewBox="0 0 240 90" style="width:220px;margin:0 auto 10px;display:block;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2))">
                <rect x="30" y="25" width="180" height="40" rx="6" fill="#f8f0e0" stroke="#d4c5a0" stroke-width="2"/>
                <rect x="95" y="18" width="50" height="54" rx="4" fill="#f8f0e0" stroke="#d4c5a0" stroke-width="1"/>
                <rect x="60" y="25" width="12" height="40" fill="${c1.color}"/>
                <rect x="80" y="25" width="12" height="40" fill="${c2.color}"/>
                <rect x="110" y="25" width="14" height="40" fill="${c3.color}"/>
                <rect x="150" y="25" width="10" height="40" fill="${c4.color}"/>
                <line x1="30" y1="65" x2="10" y2="65" stroke="#333" stroke-width="3"/>
                <line x1="30" y1="45" x2="10" y2="45" stroke="#333" stroke-width="3"/>
                <line x1="210" y1="65" x2="230" y2="65" stroke="#333" stroke-width="3"/>
                <line x1="210" y1="45" x2="230" y2="45" stroke="#333" stroke-width="3"/>
                <text x="120" y="85" text-anchor="middle" fill="#64748b" font-size="9">${band1} · ${band2} · ${band3} · ${band4}</text>
            </svg>
            <div class="calc-result-value"><strong>${formatResistance(value)}</strong> ±${tolerance}%</div>
            <div class="calc-result-detail">Dígitos: ${digit1}${digit2} &nbsp;·&nbsp; Multiplicador: ×${multiplier}</div>
            <div class="calc-result-formula">R = (${digit1}${digit2}) × ${multiplier} = ${value.toLocaleString()}Ω</div>
        </div>
    `;
}

function formatResistance(ohms) {
    if (ohms >= 1000000) return (ohms / 1000000).toFixed(2) + ' MΩ';
    if (ohms >= 1000) return (ohms / 1000).toFixed(2) + ' kΩ';
    return ohms.toFixed(2) + ' Ω';
}

// ===== CALCULADORA DE CÓDIGO DE COLORES (VISUAL) =====
const resistorState = { b1: 1, b2: 2, multIdx: 3, tolIdx: 2 };
const COLOR_NAMES = ['Negro','Marrón','Rojo','Naranja','Amarillo','Verde','Azul','Violeta','Gris','Blanco','Plateado','Dorado'];
const BAND_COLORS = ['#000000','#8b4513','#dc2626','#ea580c','#eab308','#16a34a','#2563eb','#7c3aed','#94a3b8','#f8fafc'];
const MULT_COLORS = ['#cbd5e1','#fbbf24','#000000','#8b4513','#dc2626','#ea580c','#eab308','#16a34a','#2563eb','#7c3aed'];
const MULT_VALS = [0.01,0.1,1,10,100,1000,10000,100000,1000000,10000000];
const TOL_COLORS = ['#8b4513','#dc2626','#fbbf24','#cbd5e1'];
const TOL_NAMES = ['±1%','±2%','±5%','±10%'];
const TOL_VALS = [1,2,5,10];

const PALETTE_DATA = [
    { label: '1ª Banda', colors: BAND_COLORS, names: COLOR_NAMES.slice(0,10) },
    { label: '2ª Banda', colors: BAND_COLORS, names: COLOR_NAMES.slice(0,10) },
    { label: 'Multiplicador', colors: MULT_COLORS, names: ['Plateado','Dorado','Negro','Marrón','Rojo','Naranja','Amarillo','Verde','Azul','Violeta'] },
    { label: 'Tolerancia', colors: TOL_COLORS, names: TOL_NAMES }
];

function drawResistorSVG(b1, b2, mIdx, tIdx, clickable) {
    const b1c = BAND_COLORS[b1] || '#000';
    const b2c = BAND_COLORS[b2] || '#000';
    const mc = MULT_COLORS[mIdx] || '#000';
    const tc = TOL_COLORS[tIdx] || '#fbbf24';
    const cb = clickable ? ' style="cursor:pointer" onclick="openPalette(event,' : '';
    const ce = clickable ? ')"' : '';
    return `<svg viewBox="0 0 340 120" style="max-width:340px;display:block;margin:0 auto">
        <rect x="20" y="30" width="300" height="60" rx="6" fill="#e2c9a0" stroke="#c4a87a" stroke-width="1.5"/>
        <rect x="20" y="30" width="300" height="60" rx="6" fill="url(#resGrad)"/>
        <rect x="40" y="18" width="10" height="84" rx="2" fill="#c4a87a"/>
        <rect x="290" y="18" width="10" height="84" rx="2" fill="#c4a87a"/>
        <rect x="88" y="28" width="26" height="64" rx="2" fill="${b1c}" stroke="#333" stroke-width="0.5"${cb}0${ce}/>
        <rect x="128" y="28" width="26" height="64" rx="2" fill="${b2c}" stroke="#333" stroke-width="0.5"${cb}1${ce}/>
        <rect x="173" y="28" width="26" height="64" rx="2" fill="${mc}" stroke="#333" stroke-width="0.5"${cb}2${ce}/>
        <rect x="225" y="28" width="26" height="64" rx="2" fill="${tc}" stroke="#333" stroke-width="0.5"${cb}3${ce}/>
        <text x="50" y="115" text-anchor="middle" fill="#94a3b8" font-size="9">1ª</text>
        <text x="101" y="115" text-anchor="middle" fill="#94a3b8" font-size="9">2ª</text>
        <text x="141" y="115" text-anchor="middle" fill="#94a3b8" font-size="9">×</text>
        <text x="186" y="115" text-anchor="middle" fill="#94a3b8" font-size="9">±</text>
        <text x="257" y="115" text-anchor="middle" fill="#94a3b8" font-size="9">Tol</text>
        <line x1="20" y1="55" x2="40" y2="55" stroke="#c4a87a" stroke-width="2"/>
        <line x1="20" y1="65" x2="40" y2="65" stroke="#c4a87a" stroke-width="2"/>
        <line x1="300" y1="55" x2="320" y2="55" stroke="#c4a87a" stroke-width="2"/>
        <line x1="300" y1="65" x2="320" y2="65" stroke="#c4a87a" stroke-width="2"/>
        <defs>
            <linearGradient id="resGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(255,255,255,0.15)"/>
                <stop offset="50%" stop-color="rgba(0,0,0,0.05)"/>
                <stop offset="100%" stop-color="rgba(0,0,0,0.1)"/>
            </linearGradient>
        </defs>
    </svg>`;
}

function openPalette(event, bandIdx) {
    event.stopPropagation();
    const pal = document.getElementById('colorPalette');
    const data = PALETTE_DATA[bandIdx];
    const multVals = ['×0.01','×0.1','×1','×10','×100','×1K','×10K','×100K','×1M','×10M'];
    const tolVals = ['±1%','±2%','±5%','±10%'];
    let labels;
    if (bandIdx === 2) labels = multVals;
    else if (bandIdx === 3) labels = tolVals;
    else labels = data.names;
    pal.innerHTML = '<div style="font-weight:600;font-size:0.8rem;margin-bottom:0.5rem;color:#475569">' + data.label + '</div><div style="display:flex;flex-wrap:wrap;gap:6px">' +
        data.colors.map((c, i) =>
            '<div style="width:36px;height:36px;border-radius:50%;background:' + c + ';border:2px solid ' + (c === '#f8fafc' || c === '#fbbf24' || c === '#cbd5e1' ? '#94a3b8' : 'transparent') + ';cursor:pointer;position:relative" onclick="selectColor(' + bandIdx + ',' + i + ');event.stopPropagation()" title="' + labels[i] + '">' +
            (c === '#f8fafc' ? '' : '') +
            '</div>'
        ).join('') +
        '</div>';
    const rect = event.target.getBoundingClientRect();
    const container = document.getElementById('colorResistorSVG').getBoundingClientRect();
    pal.style.display = 'block';
    pal.style.position = 'absolute';
    pal.style.left = Math.min(rect.left - container.left, 200) + 'px';
    pal.style.top = (rect.bottom - container.top + 5) + 'px';
    pal._bandIdx = bandIdx;
    document.addEventListener('click', closePalette, { once: true });
}

function closePalette() {
    document.getElementById('colorPalette').style.display = 'none';
}

function selectColor(bandIdx, colorIdx) {
    if (bandIdx === 0) resistorState.b1 = colorIdx;
    else if (bandIdx === 1) resistorState.b2 = colorIdx;
    else if (bandIdx === 2) resistorState.multIdx = colorIdx;
    else if (bandIdx === 3) resistorState.tolIdx = colorIdx;
    closePalette();
    renderResistorCalc();
}

function renderResistorCalc() {
    const { b1, b2, multIdx, tolIdx } = resistorState;
    const mult = MULT_VALS[multIdx];
    const value = (b1 * 10 + b2) * mult;
    const fmt = val => val >= 1000000 ? (val/1000000).toFixed(1) + ' MΩ' : val >= 1000 ? (val/1000).toFixed(1) + ' kΩ' : val + ' Ω';
    const multLabels = ['×0.01','×0.1','×1','×10','×100','×1K','×10K','×100K','×1M','×10M'];
    document.getElementById('colorResistorSVG').innerHTML = drawResistorSVG(b1, b2, multIdx, tolIdx, true) + '<div id="colorPalette" style="display:none;position:absolute;background:#fff;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.2);padding:0.75rem;z-index:100;max-width:320px"></div>';
    document.getElementById('colorCalcResult').innerHTML = `
        <div class="calc-result-wrapper">
            <div class="calc-result-value">${value.toLocaleString()} Ω = ${fmt(value)}</div>
            <div class="calc-result-detail">${COLOR_NAMES[b1]} · ${COLOR_NAMES[b2]} · ${multLabels[multIdx]} · ${TOL_NAMES[tolIdx]}</div>
        </div>
    `;
}

function updateValueToColor() {
    const val = parseFloat(document.getElementById('valueToColor').value);
    const tolVal = parseInt(document.getElementById('valueToColorTol').value);
    const resultDiv = document.getElementById('valueToColorResult');
    const svgDiv = document.getElementById('valueToColorSVG');
    if (isNaN(val) || val <= 0) {
        svgDiv.innerHTML = '';
        resultDiv.innerHTML = '<div class="calc-result-wrapper"><div class="calc-result-detail">Ingresa un valor válido mayor a 0</div></div>';
        return;
    }
    let digits = val;
    let mult = 1;
    while (digits >= 100) { digits /= 10; mult *= 10; }
    while (digits < 10) { digits *= 10; mult /= 10; }
    const b1 = Math.floor(digits / 10);
    const b2 = Math.floor(digits % 10);
    const multIdx = Math.max(0, MULT_VALS.indexOf(parseFloat(mult.toFixed(10))));
    const tolIdx = TOL_VALS.indexOf(tolVal);
    const fmtVal = val >= 1000000 ? (val/1000000).toFixed(1) + ' MΩ' : val >= 1000 ? (val/1000).toFixed(1) + ' kΩ' : val + ' Ω';
    const multLabels = ['×0.01','×0.1','×1','×10','×100','×1K','×10K','×100K','×1M','×10M'];
    svgDiv.innerHTML = drawResistorSVG(b1, b2, multIdx, tolIdx >= 0 ? tolIdx : 2);
    resultDiv.innerHTML = `
        <div class="calc-result-wrapper">
            <div class="calc-result-value">${val.toLocaleString()} Ω = ${fmtVal}</div>
            <div class="calc-result-detail">${COLOR_NAMES[b1] || '?'} · ${COLOR_NAMES[b2] || '?'} · ${multLabels[multIdx]} · ${TOL_NAMES[tolIdx >= 0 ? tolIdx : 2]}</div>
        </div>
    `;
}

// ===== FUNCIONES AUXILIARES =====
function startCourse() {
    navigateToSection('tema1');
}

console.log('✅ Sistema de electrónica interactivo cargado correctamente');
