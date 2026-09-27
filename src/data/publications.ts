export type PublicationCategory = 'Journal Articles' | 'Conference Papers' | 'Theses' | 'Manuscripts';

export type Publication = {
  id: string;
  category: PublicationCategory;
  authors: string[];
  title: string;
  venue: string;
  year?: number;
  description?: string;
  abstract?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  note?: string;
  paper?: string;
  doi?: string;
  pdf?: string;
  code?: string;
  video?: string;
  placeholder?: boolean;
};

export const publicationCategories: PublicationCategory[] = [
  'Journal Articles', 'Conference Papers', 'Theses', 'Manuscripts',
];

/**
 * Add a publication by copying an entry below. Use a unique id and list authors
 * in publication order. The site emphasizes the name in personal.ts automatically.
 * `paper` is the publisher or repository page; `pdf` is for a public PDF URL.
 * `description` is a short summary; `abstract` is the full abstract shown on
 * the publications page. Omit unavailable links. The first three entries
 * appear on the home page.
 */
export const publications: Publication[] = [
  {
    id: 'vijay-2025-dw-admm',
    category: 'Journal Articles',
    authors: ['Vishnu Vijay', 'Kartik A. Pant', 'Minhyun Cho', 'Inseok Hwang'],
    title: 'A Dynamically Weighted ADMM Framework for Byzantine Resilience',
    venue: 'IEEE Control Systems Letters',
    year: 2025,
    volume: '9',
    pages: '2591–2596',
    description: 'Dynamic edge weights make distributed ADMM resilient to faulty or adversarial network nodes.',
    abstract: 'The alternating direction method of multipliers (ADMM) is a popular method to solve distributed consensus optimization utilizing efficient communication among various nodes in the network. However, in the presence of faulty or attacked nodes, even a small perturbation (or sharing false data) during the communication can lead to divergence of the solution. To address this issue, in this letter we consider ADMM under the effect of Byzantine threat, where an unknown subset of nodes is subject to Byzantine attacks or faults. We propose Dynamically Weighted ADMM (DW-ADMM), a novel variant of ADMM that uses dynamic weights on the edges of the network, thus promoting resilient distributed optimization in settings without central coordination. We establish that the proposed method (i) produces a nearly identical solution to conventional ADMM in the error-free case, and (ii) guarantees a bounded solution with respect to the global minimizer, even under Byzantine threat. Finally, we demonstrate the effectiveness of our proposed algorithm using illustrative numerical simulations.',
    paper: 'https://ieeexplore.ieee.org/abstract/document/11261333',
    doi: '10.1109/LCSYS.2025.3635522',
  },
  {
    id: 'vijay-2025-multi-robot-integrity',
    category: 'Journal Articles',
    authors: ['Vishnu Vijay', 'Kartik A. Pant', 'Minhyun Cho', 'Yifan Guo', 'James M. Goppert', 'Inseok Hwang'],
    title: 'Range-Based Multi-Robot Integrity Monitoring For Cyberattacks and Faults: An Anchor-Free Approach',
    venue: 'IEEE Robotics and Automation Letters',
    year: 2025,
    volume: '10',
    issue: '3',
    pages: '2630–2637',
    description: 'An anchor-free method detects and localizes attacked or faulty robots using inter-robot ranges.',
    abstract: 'Coordination of multi-robot systems (MRSs) relies on efficient sensing and reliable communication among the robots. However, the sensors and communication channels of these robots are often vulnerable to cyberattacks and faults, which can disrupt their individual behavior and the overall objective of the MRS. In this work, we present a multi-robot integrity monitoring framework that utilizes inter-robot range measurements to (i) detect the presence of cyberattacks or faults affecting the MRS, (ii) identify the affected robot(s), and (iii) reconstruct the resulting localization error of these robot(s). The proposed iterative algorithm leverages sequential convex programming and alternating direction of multipliers method to enable real-time and distributed implementation. Our approach is validated using numerical simulations and demonstrated using PX4-SiTL in Gazebo on an MRS, where certain agents deviate from their desired position due to a GNSS spoofing attack. Furthermore, we demonstrate the scalability and interoperability of our algorithm through mixed-reality experiments by forming a heterogeneous MRS comprising real Crazyflie UAVs and virtual PX4-SiTL UAVs working in tandem.',
    paper: 'https://ieeexplore.ieee.org/abstract/document/10854616',
    doi: '10.1109/LRA.2025.3534068',
  },
  {
    id: 'pant-2026-structural-resilience',
    category: 'Journal Articles',
    authors: ['Kartik Anand Pant', 'Vishnu Vijay', 'Minhyun Cho', 'Inseok Hwang'],
    title: 'On Enhancing Structural Resilience of Multirobot Coverage Control With Bearing Rigidity',
    venue: 'IEEE Transactions on Control of Network Systems',
    year: 2026,
    volume: '13',
    issue: '2',
    pages: '648–660',
    description: 'Bearing rigidity supports resilient coverage control and recovery after a robot is lost.',
    abstract: 'The problem of multirobot coverage control has been widely studied to efficiently coordinate a team of robots to cover a desired area using Voronoi partitioning. However, this problem faces significant challenges when some robots are lost or deviate from their desired formation during the mission due to faults or cyberattacks. Since a majority of multirobot systems (MRSs) rely on communication and relative sensing for their efficient operation, a failure in one robot could result in a cascade of failures in the entire system. In this work, we propose a resilient network design and a distributed Voronoi centroid tracking control for an MRS performing coverage tasks under adversarial conditions (e.g., cyberattacks). Our primary objective is to enable these robots to leverage the internal information redundancy from within the network through sensing and communication, utilizing bearing rigidity. To enforce a bearing rigid network, we introduce bearing maintenance as an additional cost in the nonlinear model-predictive control formulation for tracking control. A major consequence of our work is the recovery guarantees (in the event of robot loss) for the robot network, while maintaining a minimally rigid structure. The effectiveness of the proposed control design and the recovery algorithm is validated through numerical simulations.',
    paper: 'https://ieeexplore.ieee.org/abstract/document/11320437',
    doi: '10.1109/TCNS.2025.3649725',
  },
  {
    id: 'park-2024-data-driven-reachability',
    category: 'Journal Articles',
    authors: ['Hyunsang Park', 'Vishnu Vijay', 'Inseok Hwang'],
    title: 'Data-Driven Reachability Analysis for Nonlinear Systems',
    venue: 'IEEE Control Systems Letters',
    year: 2024,
    volume: '8',
    pages: '2661–2666',
    description: 'A convex program bounds the reachable set of an unknown nonlinear system from data.',
    abstract: 'We consider the problem of forward reachability analysis of a closed-box nonlinear system, using only the data from the system. We propose a method that computes an ellipsoidal set that tightly over-approximates the true reachable set using convex optimization. Exploiting the fact that a linear approximation of a nonlinear system is not unique, we find conditions of a linear time-varying system that approximates the nonlinear system such that its reachable set is guaranteed to include the reachable set of the unknown nonlinear system, assuming that the Lipschitz coefficient of the nonlinear system is known. Then, we formulate a convex optimization problem that jointly searches for the parameters of the linear system and its ellipsoidal over-approximate reachable set based only on the data to minimize the growth rate of the reachable set while ensuring the ellipsoid over-approximates the true reachable set. We demonstrate the advantages of the proposed method via two illustrative examples: an autonomous nonlinear system and the TRAF22 benchmark system, and compare the results with other state-of-the-art algorithms.',
    paper: 'https://ieeexplore.ieee.org/abstract/document/10772635',
    doi: '10.1109/LCSYS.2024.3510595',
  },
  {
    id: 'choi-2024-koopman-controllability',
    category: 'Conference Papers',
    authors: ['Joonwon Choi', 'Minhyun Cho', 'Hyunsang Park', 'Vishnu Vijay', 'Inseok Hwang'],
    title: 'On The Controllability Preservation of Koopman Bilinear Surrogate Model',
    venue: '2024 IEEE 63rd Conference on Decision and Control (CDC)',
    year: 2024,
    description: 'An analysis of when a data-driven Koopman bilinear surrogate preserves controllability.',
    abstract: 'In this paper, we analyze the controllability of the Koopman bilinear surrogate model of a controllable control affine system. The Koopman operator is a linear operator that can describe the evolution of an original (nonlinear) system by lifting the state using an observable. However, it has been proven that the lifted system may not necessarily be full-state controllable even if the original system is. Moreover, the infinite-dimensional nature of the Koopman operator means that a finite-dimensional approximation is often required in practice and thus, one cannot simply guarantee the lifted system to preserve the same controllability property of the original system. Motivated by this, we investigate how the controllability property of the original system affects that of the lifted system. We specifically focus on control affine systems, where one can construct a Koopman bilinear surrogate model using the infinitesimal generator of the Koopman operator. We assume there exists an admissible controller that can drive the state of the original control affine system to a desired state. Then, we present the controllability property of the corresponding Koopman bilinear surrogate model, constructed by the data-driven infinitesimal generator using generator extended dynamic mode decomposition (gEDMD). A numerical simulation example using a quadrotor model is presented to demonstrate the proposed results.',
    paper: 'https://ieeexplore.ieee.org/abstract/document/10886212',
    doi: '10.1109/CDC56724.2024.10886212',
  },
  {
    id: 'guo-2026-resilient',
    category: 'Conference Papers',
    authors: ['Yifan Guo', 'Kartik A. Pant', 'Sounghwan Hwang', 'Vishnu Vijay', 'James M. Goppert', 'Inseok Hwang'],
    title: 'RESiLIENT: A Neural-Symbolic Resilient Threat-Response Framework for Large-Scale Hierarchical Swarms',
    venue: 'Proceedings of 1st GENZERO Workshop',
    year: 2026,
    pages: '3–11',
    description: 'A neural-symbolic framework for identifying threats and responding in hierarchical robot swarms.',
    abstract: 'Achieving resilience has become an emerging challenge for large-scale swarm autonomy, entailing both the identification of unforeseen events and the recovery of affected systems from such events. The complexity of modern autonomous systems introduces new system vulnerabilities to adversarial attacks on both physical- and cyber-systems. These vulnerabilities, coupled with the intricate interconnection of large-scale swarm systems, make swarm-level resiliency difficult to obtain. A simple failure in one local system can cascade to others, leading to catastrophe. In this poster, we highlight how neural-symbolic concepts, combining the best of machine learning and control theory in a unified framework, can enhance the resilience of hierarchical swarm operations. Through several illustrative examples, we showcase the advantages of neural-symbolic approaches in two broad categories: proactive and reactive strategies for resilient hierarchical swarms. With strong interpretability, our approaches collectively achieve resilient planning, continuous evolution, and swift re-organization against unknown threats and anomalies.',
    paper: 'https://link.springer.com/chapter/10.1007/978-981-95-1050-4_1',
    doi: '10.1007/978-981-95-1050-4_1',
  },
  {
    id: 'cho-2026-evtol-path-planning',
    category: 'Conference Papers',
    authors: ['Minhyun Cho', 'Sounghwan Hwang', 'Guanlin Wu', 'Vishnu Vijay', 'Sooyung Byeon', 'Inseok Hwang'],
    title: 'C-Rate Constrained Path Planning for Battery Pack Health Management in Long-Term eVTOL Operations',
    venue: 'AIAA SCITECH 2026 Forum',
    year: 2026,
    note: 'Paper 2026-0920',
    description: 'Battery-aware trajectory optimization constrains discharge rate during multi-phase eVTOL flight.',
    abstract: 'This paper develops a battery-aware trajectory optimization framework for a tilt-rotor electric vertical takeoff and landing (eVTOL) aircraft operating within advanced air mobility (AAM) systems. Although eVTOL vehicles enable zero-emission flight and flexible routing, their heavy reliance on lithium-ion batteries imposes critical operational constraints, particularly during vertical takeoff and landing, transition, and other high-power maneuvers that could accelerate battery degradation and reduce long-term mission reliability. To address these challenges, we formulate a multi-phase optimal control problem (OCP) that explicitly regulates the battery discharge rate (C-rate) throughout the flight mission. The proposed approach integrates multi-phase tilt-rotor eVTOL dynamics with the Rint battery equivalent circuit model (ECM), enabling trajectory decisions that account for long-term capacity fade. The optimization jointly minimizes mission time and energy consumption, while enforcing constraints on state-of-charge (SOC) evolution, C-rate limits, and actuator capabilities. We solve the proposed multi-phase OCP using the GPOPS-II optimal control solver. The OCP problem considers an eVTOL powertrain system and battery pack in addition to the eVTOL dynamics. Simulation results demonstrate that the C-rate-constrained trajectory generated by the optimizer yields safer and more sustainable operation without compromising mission performance, thereby supporting long-term reliability of eVTOL operations.',
    paper: 'https://arc.aiaa.org/doi/abs/10.2514/6.2026-0920',
    doi: '10.2514/6.2026-0920',
  },
  {
    id: 'vijay-2025-ms-thesis',
    category: 'Theses',
    authors: ['Vishnu Vijay'],
    title: 'Cyber-Resilient Multi-Robot Systems: Toward Secure Autonomous Networks',
    venue: 'M.S. thesis, Purdue University',
    year: 2025,
    description: 'A thesis on anchor-free integrity monitoring and Byzantine-resilient distributed optimization in multi-robot systems.',
    abstract: 'The reliability and safety of multi-robot systems (MRSs) are increasingly critical as such systems are deployed in real-world missions such as autonomous surveillance, infrastructure inspection, and disaster response. These systems rely on continuous communication and local sensing to achieve distributed coordination and consensus. However, this same interconnectivity exposes MRSs to vulnerabilities such as sensor faults, communication failures, and deliberate cyberattacks, which can corrupt shared information and compromise the collective objective of the system. Ensuring resilience in these settings requires not only the ability to detect and identify compromised agents, but also to guarantee stable network behavior even when adversarial or faulty information is introduced. Achieving this in a decentralized manner—without dependence on a central coordinator or trusted nodes—remains a central challenge in multi-agent robotics and distributed optimization. The first part of this thesis addresses this challenge by introducing an anchor-free, range-based integrity monitoring framework for MRSs that detects, identifies, and reconstructs the effects of cyberattacks and system faults using only inter-robot range measurements. By formulating the problem as a distributed optimization solved via Sequential Convex Programming (SCP) and the Alternating Direction Method of Multipliers (ADMM), the proposed approach enables real-time, scalable, and fully distributed fault detection without relying on any pre-defined anchors or trusted agents. A threshold-based cold-start mechanism is introduced to ensure robustness against sensor noise and changes in network topology, maintaining algorithmic stability under realistic, time-varying conditions. The framework is validated through numerical simulations and mixed-reality experiments involving heterogeneous UAV swarms subjected to GNSS spoofing attacks, demonstrating effective detection, identification, and localization of compromised agents. While this framework effectively detects and reconstructs faults, subsequent analysis revealed a critical vulnerability: falsified or inconsistent network information can bias the distributed optimization process itself, leading to divergence or erroneous consensus among nominal agents. To overcome this limitation, the second part of the thesis develops the Dynamically Weighted ADMM (DW-ADMM) algorithm, a Byzantine-resilient extension of ADMM that dynamically reweights communication edges to suppress the influence of malicious nodes. Theoretical results establish convergence to the global optimum in error-free conditions and bounded performance under Byzantine threats. Simulation studies confirm that DW-ADMM maintains consensus and optimization accuracy even when a subset of agents transmits adversarial data. Together, these contributions form a comprehensive framework for resilient distributed estimation and optimization in multi-robot systems, bridging fault detection, attack identification, and Byzantine-tolerant coordination under a unified theoretical and experimental foundation.',
    doi: '10.25394/PGS.30654062',
  },
  {
    id: 'vijay-2026-confidence-aware-reachability',
    category: 'Manuscripts',
    authors: ['Vishnu Vijay', 'Inseok Hwang'],
    title: 'Data-Driven Confidence-Aware Forward Reachability Framework for Learned Nonlinear Systems',
    venue: 'Unpublished manuscript',
    year: 2026,
    description: 'State-dependent uncertainty bounds from conditional conformal prediction support forward reachability for learned dynamics, demonstrated in WAM-V simulations.',
    abstract: 'Learning-based models are increasingly used to describe complex nonlinear systems, yet their deployment in safety-critical tasks is limited by modeling uncertainty, requiring a deeper understanding of the system’s future behavior under modeling uncertainty. This paper presents a data-driven framework for a confidence-aware robust forward reachability of nonlinear systems with learned dynamics. The approach combines machine learning-based representation of the system dynamics with conditional conformal prediction to construct finite-sample, state-dependent probabilistic uncertainty bounds on model mismatch without assuming an uncertainty distribution. These uncertainty bounds are incorporated into a recursive reachable set propagation scheme, yielding robust forward reachable sets that contain the true system trajectory with a prescribed confidence level over a finite horizon, even under model misspecification. To enable practical use in downstream tasks, e.g., collision checking, the resulting reachable sets are represented using alpha shapes to capture nonconvex geometry and then decomposed into collections of convex polytopes for efficiency. The proposed method is demonstrated in numerical simulations on a Wave Adaptive Modular Vessel (WAM-V) unmanned surface vehicle using a Koopman operator-based representation of the system dynamics, where results demonstrate the efficiency and accuracy of our approach.',
  },
];
